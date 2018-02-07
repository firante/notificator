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
      'email': [null,  [Validators.required, validator.email]],
      'password': [null,  [Validators.required, Validators.minLength(8)]],
      'confirm-password': [null,  [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit(e: any): void {
    e.preventDefault();
    const usernameControl = this.registerForm.get('username');
    const emailControl = this.registerForm.get('email');
    const passwordControl = this.registerForm.get('password');
    const username = usernameControl.value;
    const email = emailControl.value;
    const password = passwordControl.value;
    this.queryService.isUsernameOrEmailExist({username, email})
      .then((res: any = []) => res.forEach((v: any) => {
	console.log(v);
	v.profile.username === username && usernameControl.setErrors({'Username already exists' : true});
	v.profile.email === email && emailControl.setErrors({'Email already exists': true});
      }));
    //const loginData = { username, password, email };
//    this.loginService.auth(loginData);
  }  
}