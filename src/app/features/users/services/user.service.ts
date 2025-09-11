import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  username: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, username: 'admin' },
    { id: 2, username: 'guest' }
  ];

  getAll(): Observable<User[]> {
    return of(this.users);
  }
}
