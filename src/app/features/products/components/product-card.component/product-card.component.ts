// src/app/features/products/components/product-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <div class="card">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price | currency:'DKK' }}</p>
       <a [routerLink]="['/products', product.id]">View Details</a>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      margin: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
