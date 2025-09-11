// app.routes.ts
import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login.page/login.page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'products', loadChildren: () => import('./features/products/product.routes').then(m => m.PRODUCT_ROUTES) },
  { path: 'users', loadChildren: () => import('./features/users/user.routes').then(m => m.USER_ROUTES) },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];
