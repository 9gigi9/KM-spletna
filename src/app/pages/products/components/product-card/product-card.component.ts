import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [TranslateModule],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
