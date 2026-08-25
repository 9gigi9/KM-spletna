import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-special-products-page',
  imports: [ProductsComponent, AsyncPipe],
  templateUrl: './special-products-page.component.html',
})
export class SpecialProductsPageComponent {
  readonly productService = inject(ProductService);
}
