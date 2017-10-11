import { Component } from '@angular/core';
import { LoginService } from '../_services/login/login.service';

@Component ({
    selector: 'header-main',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})

export class HeaderMain {
  constructor(private loginService: LoginService) {}

  isLogin(): boolean {
    return this.loginService.loggedIn;
  }

  getUserName(): string {
    return this.loginService.username;
  }
  
}
