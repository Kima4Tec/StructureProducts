// src/app/app.component.ts
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <a routerLink="/products">Products</a>
      <a routerLink="/users">Users</a>
      <button *ngIf="!auth.isLoggedIn()" routerLink="/login">Login</button>
      <button *ngIf="auth.isLoggedIn()" (click)="logout()">Logout</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { display: flex; gap: 1rem; padding: 1rem; background: #f0f0f0; }
    a { text-decoration: none; }
  `]
})
export class AppComponent {
  auth = inject(AuthService);

  logout() {
    this.auth.logout();
  }
}
