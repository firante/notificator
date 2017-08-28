import { Component } from '@angular/core';
import { LoginService } from '../../_services/login/login.service';
@Component ({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent {

  constructor(private loginService: LoginService) {}
  
  onSubmit(e: any, username: any, email: any, password: any, confirm_password: any) {
    e.preventDefault();
    const loginData = { username, email, password, confirm_password };
    this.loginService.auth(loginData);
  }  
}