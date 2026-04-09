import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);

  readonly products$ = this.http.get<Product[]>('assets/data/produkti.json');
  readonly specialProducts$ = this.http.get<Product[]>(
    'assets/data/special-produkti.json',
  );
}
