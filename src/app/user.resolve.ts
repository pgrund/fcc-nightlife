import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { User } from './model/user';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot) {
    console.log('resolving user');
    return this.userService.getUser();
  }
}
