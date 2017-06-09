import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from './search.service';
import { UserService } from '../user.service';

import { Site } from '../model/site';
import { User } from '../model/user';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  location: string;
  sites: Site[];

  private user: User;
  constructor( private router: Router,
               private route: ActivatedRoute,
               private searchService: SearchService,
               private userService: UserService ) {
    this.sites = [];
  }


  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
    if(this.user) {
      this.location = this.user.searches[0];
    }
    console.log('init search', this.user, this.location);
  }

  onSearch(location: string): void {
    if( this.user) {
      this.user = this.userService.addSearch(location);
    }
    this.sites = this.searchService.find(location);
    console.log('search', this.user);
  }

  onVisit(id: string): void {
    if(this.user) {
      let site = this.sites.find(s => s.id == id);
      console.log(site);
      alert(this.user.name + " goes to " + site.name);
    } else {
      console.log('need to authenticate ...');
      this.router.navigate(['/login'], {queryParams: { visit: id}})
    }
  }
}
