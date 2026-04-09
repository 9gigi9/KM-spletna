import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() shortDesc!: string;
  @Input() price!: string;
  @Input() onDiscount!: boolean;
  @Input() discountPrice!: string;
  @Input() discountPercentage!: string;
  @Input() imageUrl!: string;
}

