import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()

export class LoginService {
  private _loggedIn: boolean = false;
  private _token: string = '';
  
  constructor(private _http: Http) {}
  
  get loggedIn(): boolean {
    return this._loggedIn;
  }
  
  get token(): string {
    return this._token;
  }

  get authObj(): any {
    return { loggedIn: this._loggedIn, token: this._token }
  }
  
  auth({ username, password, email }: {username: string, password: string, email: string}) {
    const url = 'http://localhost:9999/api/login';
    const body = { username, password, email };
    this._http.post(url, { body })
      .toPromise()
      .then((res) => {console.log(res);})
      .catch(err => console.log(err));
  }
}