import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms'

import validator from '../../helpers/validators';

import { LoginService } from '../../_services/login/login.service';

import { QueryService } from '../../_services/querys';

@Component ({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private queryService: QueryService, private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'username': [null,  [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      'email': [null],
      'password': [null,  [Validators.required, Validators.minLength(8)]],
      'confirmPassword': [null,  [Validators.required, Validators.minLength(8)]]
    }, {
      validator: Validators.compose([validator.passwordMatch, validator.email])
    });
  }

  onSubmit(e: any): void {
    e.preventDefault();
    const username = this.registerForm.get('username').value;
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.queryService.isUsernameOrEmailExist({username, email})
      .then((res: any = []) => res.forEach((v: any) => {
	console.log(v);
	v.profile.username === username && this.registerForm.get('username').setErrors({'usernameExists' : true});
	v.profile.email === email && this.registerForm.get('email').setErrors({'emailExists': true});
      }));
    const loginData = { username, password, email };
    this.loginService.registerUser(loginData);
  }
}