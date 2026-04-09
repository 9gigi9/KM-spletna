import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AfterPurchaseHuntSpecialComponent } from './components/after-purchase-hunt-special/after-purchase-hunt-special.component';
import { AfterPurchaseHuntComponent } from './components/after-purchase-hunt/after-purchase-hunt.component';
import { AfterPurchaseComponent } from './components/after-purchase/after-purchase.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HireUsComponent } from './components/hire-us/hire-us.component';
import { EventDetailsComponent } from './features/event-tickets/pages/event-details/event-details.component';
import { TicketsStoreComponent } from './features/event-tickets/pages/tickets-store/tickets-store.component';
import { ProductsPageComponent } from './features/products/pages/products-page/products-page.component';
import { SpecialProductsPageComponent } from './features/products/pages/special-products-page/special-products-page.component';

export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  //   { path: 'novice', component: NoviceComponent },
  { path: 'hire-us', component: HireUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'tickets-store/:id', component: EventDetailsComponent },
  { path: 'tickets-store', component: TicketsStoreComponent },
  { path: 'store', component: ProductsPageComponent },
  { path: 'store/special', component: SpecialProductsPageComponent },
  { path: 'after-purchase', component: AfterPurchaseComponent },
  { path: 'after-purchase-hunt', component: AfterPurchaseHuntComponent },
  {
    path: 'after-purchase-hunt-special',
    component: AfterPurchaseHuntSpecialComponent,
  },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' }, // privzeta stran
  { path: '**', redirectTo: 'contact-us' }, // če je napačna pot
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
