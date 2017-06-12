import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    error: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService) { }

    ngOnInit() {
        // reset login status
        this.userService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    }

    login() {
        this.loading = true;
        this.error = null;
        this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
                data => {
                    console.log('success', data);
                    this.userService.save(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.error(error);
                    this.error = error;
                    this.loading = false;
                });
    }

}
