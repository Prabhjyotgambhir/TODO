import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:1100/user', user)
      .map((res) => {
        return res;
      });
  }
}
