import {
  Component,
  Inject
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms'

import { LoginService } from '../../_services/login/login.service';

@Component ({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', "../../../../node_modules/semantic-ui/dist/semantic.min.css"]
})

export class LoginComponent {

  loginForm: FormGroup;
  
  constructor(private loginService: LoginService, @Inject(FormBuilder) fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': [''],
      'password': ['']
    });
  }
  
  onSubmit(e: any): void {
    e.preventDefault();
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    const loginData = { email, password };
    console.log(loginData)
    //this.loginService.login(loginData);
  }  
}