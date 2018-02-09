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
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [null],
      'password': [null, [Validators.required, Validators.minLength(8)]]
    }, {
      validator: validator.email
    });
  }
  onSubmit(e: any): void {
    e.preventDefault();
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const loginData = { email, password };
    this.loginService.login(loginData);
  }
}