import {
  Component,
  Inject
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

import { LoginService } from '../../_services/login/login.service';

@Component ({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  
  constructor(private loginService: LoginService, @Inject(FormBuilder) fb: FormBuilder) {
    this.registerForm = fb.group({
      'username': ['',  Validators.required],
      'email': ['',  Validators.required],
      'password': ['',  Validators.required],
      'confirm-password': ['',  Validators.required]
    });
    console.log(this.registerForm)
  }
  
  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.registerForm)
    //const loginData = { username, password, email };
//    this.loginService.auth(loginData);
  }  
}