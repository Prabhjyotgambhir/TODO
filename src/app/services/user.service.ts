import { Observable } from 'rxjs/Observable';
import { User } from './../models/user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  createUser(user: User): Observable<any> {
    return this.http.post('http://localhost:1100/user', user)
      .map((res) => {
        return res.json();
      });
  }
}
