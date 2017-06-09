import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from './model/user';

@Injectable()
export class AuthenticationService {


  constructor(private http: Http) { }

  login(username: string, password: string): Observable<any> {

    return Observable.create(function(observer) {
      const match = (username.toLowerCase() == password.toLowerCase());
      if(match) {
        var user :  User = {name: username, searches: [], visits: []};
        localStorage.setItem('currentUser', JSON.stringify(user));
        observer.next(user);
      } else {
        observer.error('not authenticated');
      }
      console.log("login completed ..", match, username, password);

      observer.complete();
    });
    /*
     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            })
            */
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
