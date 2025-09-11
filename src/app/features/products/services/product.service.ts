// src/app/features/products/services/product.service.ts
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produkt A', price: 100 },
    { id: 2, name: 'Produkt B', price: 200 },
  ];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }

  getById(id: number): Observable<Product> {
    return of(this.products.find(p => p.id === id)!);
  }
}
