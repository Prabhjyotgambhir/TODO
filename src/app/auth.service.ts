import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private cookieService: CookieService) {
  }

  getAuthToken() {
    const token = this.cookieService.get('token');
    return token;
  }
}
