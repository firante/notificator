import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()

export class LoginService {
  private _loggedIn: boolean = false;
  private _token: string = '';
  private _username: string = '';
  
  constructor(private _http: Http, private router: Router) {}
  
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
  
  auth({ username, password, email }: {username: string, password: string, email: string}) {
    const url = 'http://localhost:9999/register';
    const body = { username, password, email };
    this._http.post(url, { body })
      .toPromise()
      .then((res) => {
	const result = res && res._body && JSON.parse(res._body);
	this._loggedIn = true;
	this._token = result.token;
	this._username = result.username;
	window.localStorage.setItem('token', result.token);
	this.router.navigate(['/home']);
      })
      .catch(err => console.log(err));
  }

  autoLogin () {
    const token = window.localStorage.getItem('token');
    const url = 'http://localhost:9999/autologin';
    const body = { token };
    this._http.post(url, body)
      .toPromise()
      .then((res) => {
	const result = res && res._body && JSON.parse(res._body);
	if(result.login_status) {
	  this._loggedIn = true;
	  this._token = token;
	  this._username = result.username;
	  this.router.navigate(['/home']);
	} else {
	  console.log(result.message);
	}
      })
      .catch(err => console.log(err));
  }

  login({ email, password }: {email: string, password: string }) {
    const url = 'http://localhost:9999/login';
    const body = { email, password };
    this._http.post(url, { body })
      .toPromise()
      .then((res) => {
	const result = res && res._body && JSON.parse(res._body);
	this._loggedIn = true;
	this._token = result.token;
	this._username = result.username;
	window.localStorage.setItem('token', result.token);
	this.router.navigate(['/home']);
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