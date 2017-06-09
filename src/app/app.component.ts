import { Component } from '@angular/core';

import { SearchService } from './search/search.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SearchService,
    UserService
  ]
})
export class AppComponent {


  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  getUser(): User {
    return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
