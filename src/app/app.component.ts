import { Component } from '@angular/core';

import { SearchService } from './search/search.service';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SearchService,
    AuthenticationService
  ]
})
export class AppComponent {


  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  getUser(): User {
    return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
