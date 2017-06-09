import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from './search.service';
import { Site } from '../model/site';
import { User } from '../model/user';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location: string;
  sites: Site[];

  constructor(private router: Router, private searchService: SearchService) {
    this.sites = [];
  }

  private getUser(): User {
    return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
  }

  ngOnInit() {
    let user = this.getUser();
    if(user) {
      this.location = user.searches[0];
    }
    console.log('init search', user, this.location);
  }

  onSearch(location: string): void {
    let user = this.getUser();
    if( user) {
      user.searches = [location, ...user.searches];
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.sites = this.searchService.find(location);
    console.log('search', user);
  }

  onVisit(id: string): void {
    let user = this.getUser();
    if(user) {
      let site = this.sites.find(s => s.id == id);
      console.log(site);
      alert(user.name + " goes to " + site.name);
    } else {
      console.log('need to authenticate ...');
      this.router.navigate(['/login'], {queryParams: { visit: id}})
    }
  }
}
