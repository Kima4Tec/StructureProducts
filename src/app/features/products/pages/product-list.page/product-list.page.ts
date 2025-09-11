// src/app/features/products/pages/product-list.page.ts
import { Component, inject, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card.component/product-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <h1>Products</h1>
    <app-product-card *ngFor="let p of products()" [product]="p"></app-product-card>
  `
})
export class ProductListPage {
  private service = inject(ProductService);
  products = signal<Product[]>([]);

  constructor() {
    this.service.getAll().subscribe(res => this.products.set(res));
  }
}
