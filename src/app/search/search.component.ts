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
  location: string = "";
  sites: Site[];
  private navigator: any;
  loading: boolean = false;

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
    this.navigator = window.navigator;
    this.loading = false;
    this.location = "";
    console.log('init search', this.user, this.location);
  }

  onSearch(location: string): void {
    if( this.user) {
      this.user = this.userService.addSearch(location);
    }
    this.loading = true;
    this.searchService.findLocation(location).then(sites => {
      this.loading = false;
      this.sites = sites;
    });
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
  onLocateMe(): void {
    this.loading = true;
    this.navigator.geolocation.getCurrentPosition(position => {
      console.log('geolocation', position);
      this.searchService.findLonLat(position.coords.longitude, position.coords.latitude).then(
        sites => {
            this.loading = false;
            this.sites = sites;
        }
      );
      this.loading = false;
    }, error => {
      console.error(error);
      this.loading = false;
    });
  }

  test(s) {
    console.log(s);
  }

  rate(s): number {
    return s*2;
  }
}
