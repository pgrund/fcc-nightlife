import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  template: ''
})

export class LogoutComponent implements OnInit {
    constructor(
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        this.userService.logout();
        console.log('logging out done');
        this.router.navigate(['/']);
    }
  }
