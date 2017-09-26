import { Component } from '@angular/core';
import { LoginService } from '../../_services/login/login.service';
@Component ({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent {

  constructor(private loginService: LoginService) {}
  
  onSubmit(e: any, username: any, password: any, email: any) {
    e.preventDefault();
    const loginData = { username, password, email };
    this.loginService.auth(loginData);
  }  
}