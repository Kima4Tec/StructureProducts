// src/app/core/services/auth.service.ts
import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  username: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInUser = signal<User | null>(null);

  login(username: string, password: string) {
    // Mock login
    const user: User = { id: 1, username, token: 'mock-token' };
    this.loggedInUser.set(user);
  }

  logout() {
    this.loggedInUser.set(null);
  }

  getUser() {
    return this.loggedInUser();
  }

  isLoggedIn() {
    return this.loggedInUser() !== null;
  }
}
