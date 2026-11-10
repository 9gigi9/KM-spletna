import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { logger, setGlobalOptions } from 'firebase-functions';
import { onRequest } from 'firebase-functions/https';
import { defineSecret } from 'firebase-functions/params';
import Stripe from 'stripe';

setGlobalOptions({ region: 'europe-west3', maxInstances: 5 });
initializeApp();

const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY');
const stripeWebhookSecret = defineSecret('STRIPE_WEBHOOK_SECRET');

// home quizzes are sold with payment links; the app adds the buyer's uid as
// client_reference_id and each stripe product has metadata quizIds=quiz-1,quiz-2
export const stripeWebhook = onRequest(
  { secrets: [stripeSecretKey, stripeWebhookSecret] },
  async (req, res) => {
    const stripe = new Stripe(stripeSecretKey.value());
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        req.headers['stripe-signature'] as string,
        stripeWebhookSecret.value(),
      );
    } catch (error) {
      logger.warn('invalid stripe signature', error);
      res.status(400).send('Invalid signature');
      return;
    }

    if (
      event.type === 'checkout.session.completed' ||
      event.type === 'checkout.session.async_payment_succeeded'
    ) {
      const session = event.data.object;
      if (session.payment_status === 'paid') {
        await writePurchases(stripe, session);
      }
    }
    res.sendStatus(200);
  },
);

async function writePurchases(stripe: Stripe, session: Stripe.Checkout.Session) {
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
    expand: ['data.price.product'],
  });
  const quizIds = lineItems.data.flatMap((item) => {
    const product = item.price?.product as Stripe.Product | undefined;
    const ids = product?.metadata?.['quizIds']?.split(',') ?? [];
    return ids.map((id) => id.trim()).filter(Boolean);
  });
  // other products (treasure hunts, tickets) use the same stripe account
  if (!quizIds.length) {
    return;
  }
  const uid = session.client_reference_id;
  if (!uid) {
    logger.error('home quiz paid without uid', { session: session.id, quizIds });
    return;
  }

  // set instead of create: stripe can resend the same event,
  // and a bundle may contain a quiz the user already owns
  const db = getFirestore();
  const batch = db.batch();
  for (const quizId of quizIds) {
    batch.set(db.doc(`purchases/${uid}_${quizId}`), {
      uid,
      quizId,
      purchasedAt: FieldValue.serverTimestamp(),
      stripeSessionId: session.id,
    });
  }
  await batch.commit();
  logger.info('purchases written', { uid, quizIds, session: session.id });
}
