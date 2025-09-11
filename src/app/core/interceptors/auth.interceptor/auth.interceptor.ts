// src/app/core/interceptors/auth.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

export const authInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const auth = inject(AuthService);
  const user = auth.getUser();

  if (user) {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${user.token}` }
    });
    return next(cloned);
  }

  return next(req);
};
