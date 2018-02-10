import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { autoLogin, login } from '../../querys-and-mutations/querys';
import mutations from '../../querys-and-mutations/mutations';

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
  
  registersUser(data: any) {
    this._query.registersUser(data)
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

  autoLogin () {
    const token = window.localStorage.getItem('token');
    const url = 'http://localhost:9999/graphql';
    const body = autoLogin(token);
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/graphql');
    
    this._http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then((result) => {
	const user = result.data.user;
	if(user && user.profile && user.profile.token) {
	  this._loggedIn = true;
	  this._token = user.profile.token;
	  this._username = user.profile.username;
	  this.router.navigate(['/home']);
	} else {
	  console.log('There is no valid token!');
	}
      })
      .catch(err => console.log(err));
  }

  login({ email, password }: {email: string, password: string }) {
    const url = 'http://localhost:9999/graphql';
    const body = login(email, password);
      
    const headers = new Headers();
    headers.append('Content-Type', 'application/graphql');
    
    this._http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then((result) => {
	const user = result.data.user;
	if(user && user.profile && user.profile.token) {
	  this._loggedIn = true;
	  this._token = user.profile.token;
	  this._username = user.profile.username;
	  window.localStorage.setItem('token', user.profile.token);
	  this.router.navigate(['/home']);
	} else {
	  console.log('Login or password are incorrect!');
	}
      })
      .catch(err => console.log(err));
  }

  logout() {
    this._loggedIn = false;
    this._token = '';
    this._username = '';
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}