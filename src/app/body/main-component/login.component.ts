import { Component } from '@angular/core';
import { LoginService } from '../../_services/login/login.service';
@Component ({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private loginService: LoginService) {}
  
  onSubmit(e: any, email: string, password: string) {
    e.preventDefault();
    const loginData = { email, password };
    this.loginService.login(loginData);
  }  
}