import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { isUsernameOrEmailExist } from '../querys-and-mutations/querys';

import { createUser } from '../querys-and-mutations/mutations';
import { autoLogin, login } from '../querys-and-mutations/querys';

const URL = 'http://localhost:9999/graphql';
const headers = new Headers();
headers.append('Content-Type', 'application/graphql');

@Injectable()

export class QueryService {
  constructor(private _http: Http) { }

  // --- check email or username existing queri ---
  isUsernameOrEmailExist = (data: any) => new Promise((resolve, reject) => {
    const body = isUsernameOrEmailExist(data);
    this._http.post(URL, body, { headers })
      .toPromise()
      .then((res: any) => res.json())
      .then((result: any) => resolve(result.data.isUsernameOrEmailExist))
      .catch((err: any) => console.log(err));
  });

  // --- register user mutation ---
  registerUser = (data: any) => new Promise((resolve, reject) => {
    const body = createUser(data.username, data.email, data.password);
    this._http.post(URL, body, { headers })
      .toPromise()
      .then((res: any) => res.json)
      .then((result) => resolve(result.data.user))
      .catch((err: any) => console.log(err));
  });

  // --- auto login user query ( if token is valid) ---
  autoLogin = () => new Promise((resolve, reject) => {
    const token = window.localStorage.getItem('token');
    const body = autoLogin(token);
    this._http.post(URL, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then((result) => resolve(result.data.user))
      .catch((err) => console.log(err));
  });

  // --- login user query ---
  login = (data: any) => new Promise((resolve, reject) => {
    const body = login(data.email, data.password);
    this._http.post(URL, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then((result) => resolve(result.data.user))
      .catch(err => console.log(err));
  });
}
