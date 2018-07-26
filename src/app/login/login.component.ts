import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: User;
  loginFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginUser = new User();
    this.loginFormGroup = new FormGroup({
      email: new FormControl(this.loginUser.email, Validators.required),
      password: new FormControl(this.loginUser.password, Validators.required)
    });
  }
  login() {
    alert('Functionality under progress');
    console.log(this.loginUser);
  }
}
