// users.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/user-list.page';
import { authGuard } from '../../core/guards/auth.guard/auth.guard';

export const USER_ROUTES: Routes = [
  { path: '', component: UserListPage, canActivate: [authGuard] }
];

export const UsersModule = RouterModule.forChild(USER_ROUTES);
