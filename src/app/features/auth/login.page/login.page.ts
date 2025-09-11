// src/app/features/auth/login.page.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h1>Login</h1>
    <input type="text" placeholder="Username" [(ngModel)]="username">
    <input type="password" placeholder="Password" [(ngModel)]="password">
    <button (click)="login()">Login</button>
  `,
  imports: []
})
export class LoginPage {
  username = '';
  password = '';
  private auth = inject(AuthService);
  private router = inject(Router);

  login() {
    this.auth.login(this.username, this.password);
    this.router.navigate(['/products']);
  }
}
