import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailsComponent {
  readonly dialogRef = inject(DialogRef);
  readonly product = inject<Product>(DIALOG_DATA);

  closeModal() {
    this.dialogRef.close();
  }

  goToStripeLink() {
    if (this.product.stripeLink) {
      window.open(this.product.stripeLink, '_blank'); // ali '_self' za isto okno
    }
  }
}
