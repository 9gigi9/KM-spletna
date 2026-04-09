import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-special-products-page',
  standalone: true,
  imports: [CommonModule, ProductsComponent],
  templateUrl: './special-products-page.component.html',
})
export class SpecialProductsPageComponent {
  readonly productService = inject(ProductService);
}
