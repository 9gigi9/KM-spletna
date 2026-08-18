import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

import { CommonModule } from '@angular/common';

import { Dialog } from '@angular/cdk/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
    selector: 'app-products',
    imports: [CommonModule, ProductCardComponent, TranslateModule],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {
  private readonly dialog = inject(Dialog);

  @Input({ required: true }) products!: Product[];

  openModal(product: Product) {
    this.dialog.open(ProductDetailsComponent, {
      data: product,
      hasBackdrop: true,
    });
  }
}
