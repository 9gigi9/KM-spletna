import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    TranslateModule,
    ProductModalComponent,
  ], // tukaj je SwiperModule
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent {
  @Input({ required: true }) products!: Product[];

  selectedProduct: Product | null = null;

  openModal(product: Product) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
