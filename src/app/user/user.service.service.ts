import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  users = [
    { id: 1, name: 'John Doe' },
    { id: 1, name: 'Maria Doe' },
  ];

  constructor() {}

  getUsers() {
    return of(this.users);
  }
}
