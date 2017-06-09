import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  profile(): Promise<any> {
    console.log('getting profile...');
    return this.http.get('/api/profile')
                  .toPromise()
                  .then( response => {
                    console.log('done');
                    return response.json().data;
                  })
                  .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
   }
}
