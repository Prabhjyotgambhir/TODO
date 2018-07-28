import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';


export class MyHttpInterceptor implements HttpInterceptor {


    constructor(@Inject(AuthService) public authService: AuthService, @Inject(Router) private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getAuthToken()}`
            }
        });
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401 || 403) {
                    // redirect to the login route
                    // or show a modal
                    this.router.navigateByUrl('login');
                }
            }
        });
    }
}
