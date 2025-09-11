import { Component, inject, signal } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngFor="let u of users()">{{ u.username }}</div>`
})
export class UserListPage {
  private service = inject(UserService);
  users = signal<User[]>([]);

  constructor() {
    this.service.getAll().subscribe(res => this.users.set(res));
  }
}
