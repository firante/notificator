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
    const url = 'http://localhost:9999/graphql';
    const body = `{
      user(token: "${token}") {
	profile {
	  token
	  username
	}
      }
    }`;
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/graphql');
    
    this._http.post(url, body, { headers })
      .toPromise()
      .then((res) => {
	console.log(res)
	const result = res && res._body && JSON.parse(res._body);
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
    const body = `{
      user(queryType: "login", email: "${email}", password: "${password}") {
	profile {
	  token
	  username
	}
      }
    }`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/graphql');
    this._http.post(url, body, { headers })
      .toPromise()
      .then((res) => {
	const result = res && res._body && JSON.parse(res._body);
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