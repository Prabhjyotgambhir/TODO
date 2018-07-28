import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    // if (!this.cookieService.get('token')) {
    //   this.router.navigateByUrl('signup');
    // }
  }

  openMyTasks() {
    this.router.navigateByUrl('tasks');
  }

  newTask() {
    this.router.navigateByUrl('new');
  }
}
