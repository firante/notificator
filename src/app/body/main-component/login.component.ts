import { Component } from '@angular/core';
import { LoginService } from '../../_services/login/login.service';
@Component ({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private loginService: LoginService) {}
  
  onSubmit(e: any, username: any, password: any) {
    e.preventDefault();
    // const loginData = { username, password };
    // this.loginService.auth(loginData);
  }  
}