import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  signupFormGroup: FormGroup;
  constructor(private userService: UserService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.signupFormGroup = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      contact: new FormControl(this.user.contact, Validators.required),
      password: new FormControl(this.user.password, Validators.required),
      repassword: new FormControl(this.user.repassword, Validators.required),
    });
  }

  signUp() {
    if (this.user.password !== this.user.repassword) {
      alert('Password doesnot match');
      return;
    }
    this.userService.createUser(this.user).subscribe(
      (response) => {
        this.cookieService.set('token', response.token);
        this.router.navigateByUrl('welcome');
      }
    );
  }
}
