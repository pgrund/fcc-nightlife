import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from './model/user';


@Injectable()
export class UserService {

  private currentUser: User;

  constructor(private http: Http) {
    this.load();
  }


  private persist() {
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  load(): void {
    this.currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;
  }

  getUser(): User {
    return this.currentUser;
  }

  save(user): void {
    this.currentUser = user;
    this.persist();
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  addSearch(searchTerm: string): User {
    if (!this.currentUser) {
      throw new Error('no user selected')
    }
    this.currentUser.searches = [searchTerm, ...this.currentUser.searches];
    this.persist();
    return this.currentUser;
  }

  addVisit(siteId: string): User {
    if (!this.currentUser) {
      throw new Error('no user selected')
    }
    this.currentUser.visits = [siteId, ...this.currentUser.visits];
    this.persist();
    return this.currentUser;
  }


}
