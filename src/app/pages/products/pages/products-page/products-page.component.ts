import { Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-page',
  imports: [ProductsComponent, AsyncPipe],
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
  readonly productService = inject(ProductService);
}
