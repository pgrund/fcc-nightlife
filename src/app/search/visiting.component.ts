import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../model/user';

@Component({
  template: `
      <h1>have fun!!</h1>
      <a routerlink="/">home</a>
    `
})
export class VisitingComponent implements OnInit {
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute ) {

  }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.updateUserVisiting(params['id']);
         this.router.navigate(['/']);
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    private updateUserVisiting(site) {
      let user : User= JSON.parse(localStorage.getItem('currentUser'));
      user.visits.push(site);
      console.log('visiting', site, user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

}
