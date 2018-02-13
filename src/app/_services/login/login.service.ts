import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { QueryService } from '../querys';

@Injectable()

export class LoginService {
  private _loggedIn: boolean = false;
  private _token: string = '';
  private _username: string = '';

  constructor(private _http: Http, private router: Router, private _query: QueryService) {}

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get token(): string {
    return this._token;
  }

  get username(): string {
    return this._username;
  }

  get authObj(): any {
    return { loggedIn: this._loggedIn, token: this._token, username: this._username };
  }

  // --- sign in user method, shoud receives (username, email, password) ---
  registersUser(data: any) {
    this._query.registerUser(data)
      .then((user) => {
	if(user && user.profile && user.profile.token) {
	  this._loggedIn = true;
	  this._token = user.profile.token;
	  this._username = user.profile.username;
	  window.localStorage.setItem('token', user.profile.token);
	  this.router.navigate(['/home']);
	} else if (user && user.status)	{
	  console.log(user.status);
	} else {
	  console.log('Registration failed!');
	}
      });
  }

  // --- autologin user method by token, should receive token from local storage. Token will be expired after 7 days ---
  autoLogin () {
    this._query.autoLogin()
      .then((user) => {
	if(user && user.profile && user.profile.token) {
	  this._loggedIn = true;
	  this._token = user.profile.token;
	  this._username = user.profile.username;
	  this.router.navigate(['/home']);
	} else {
	  console.log('There is no valid token!');
	}
      });
  }

  // --- login user method, should receive email and password ---
  login(data: any) {
    this._query.login(data)
      .then((user) => {
	if(user && user.profile && user.profile.token) {
	  this._loggedIn = true;
	  this._token = user.profile.token;
	  this._username = user.profile.username;
	  window.localStorage.setItem('token', user.profile.token);
	  this.router.navigate(['/home']);
	} else {
	  console.log('Login or password are incorrect!');
	}
      });
  }

  logout() {
    this._loggedIn = false;
    this._token = '';
    this._username = '';
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}