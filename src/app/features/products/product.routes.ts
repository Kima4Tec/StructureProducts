// src/app/features/products/products.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { ProductListPage } from './pages/product-list.page/product-list.page';
import { ProductDetailPage } from './pages/product-detail.page/product-detail.page';
import { authGuard } from '../../core/guards/auth.guard/auth.guard';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductListPage, canActivate: [authGuard] },
  { path: ':id', component: ProductDetailPage, canActivate: [authGuard] }
];

export const ProductsModule = RouterModule.forChild(PRODUCT_ROUTES);
