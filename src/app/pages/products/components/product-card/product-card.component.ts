import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../models/product.model';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
    imports: [CommonModule, TranslateModule]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
