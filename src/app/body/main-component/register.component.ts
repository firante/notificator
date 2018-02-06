import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

import validator from '../../helpers/validators';

import { LoginService } from '../../_services/login/login.service';

@Component ({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(validator)
    this.registerForm = this.fb.group({
      'username': [null,  [Validators.required, Validators.minLength(3), Validators.maxLength(20), validator.username]],
      'email': [null,  [Validators.required, validator.email]],
      'password': [null,  [Validators.required, Validators.minLength(8)]],
      'confirm-password': [null,  [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit(e: any): void {
    e.preventDefault();
    console.log(this.registerForm)
    //const loginData = { username, password, email };
//    this.loginService.auth(loginData);
  }  
}