// src/app/features/products/pages/product-detail.page.ts
import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Product Detail</h1>
    <div *ngIf="product()">
      <h2>{{ product().name }}</h2>
      <p>Price: {{ product().price }} kr</p>
    </div>
  `
})
export class ProductDetailPage implements OnInit {
  private service = inject(ProductService);
  private route = inject(ActivatedRoute);
  product = signal<Product | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(p => this.product.set(p));
  }
}
