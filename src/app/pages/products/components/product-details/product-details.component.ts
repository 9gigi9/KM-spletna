import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleLoginButtonComponent } from '../../../../components/google-login-button/google-login-button.component';
import { Product } from '../../../../models/product.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-product-details',
  imports: [GoogleLoginButtonComponent, TranslateModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsComponent {
  readonly dialogRef = inject(DialogRef);
  readonly product = inject<Product>(DIALOG_DATA);
  readonly authService = inject(AuthService);

  closeModal() {
    this.dialogRef.close();
  }

  goToStripeLink() {
    if (!this.product.stripeLink) {
      return;
    }
    if (!this.product.homeQuiz) {
      window.open(this.product.stripeLink, '_blank'); // ali '_self' za isto okno
      return;
    }
    // the webhook reads client_reference_id to know who bought the quiz
    const user = this.authService.currentUser();
    if (!user) {
      return;
    }
    const url = new URL(this.product.stripeLink);
    url.searchParams.set('client_reference_id', user.uid);
    if (user.email) {
      url.searchParams.set('prefilled_email', user.email);
    }
    window.open(url.toString(), '_blank');
  }
}
