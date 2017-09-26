import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()

export class LoginService {
  private _loggedIn: boolean = false;
  private _token: string = '';
  private _username: string = '';
  
  constructor(private _http: Http) {}
  
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
      })
      .catch(err => console.log(err));
  }
}