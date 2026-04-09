import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModalComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  @Input({ required: true }) product!: Product;
  @Output() close = new EventEmitter<void>();

  readonly isMobile = this.breakpointObserver.isMatched('(max-width: 768px)');

  closeModal() {
    this.close.emit();
  }

  goToStripeLink() {
    if (this.product.stripeLink) {
      window.open(this.product.stripeLink, '_blank'); // ali '_self' za isto okno
    }
  }
}
