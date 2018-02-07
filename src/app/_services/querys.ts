import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { isUsernameOrEmailExist } from '../querys-and-mutations/querys';

const URL = 'http://localhost:9999/graphql';
const headers = new Headers();
headers.append('Content-Type', 'application/graphql');

@Injectable()

export class QueryService {
  constructor(private _http: Http) { }

  isUsernameOrEmailExist = (data: any) => new Promise((resolve, reject) => {
    const body = isUsernameOrEmailExist(data);
    this._http.post(URL, body, { headers })
      .toPromise()
      .then((res: any) => res.json())
      .then((result: any) => resolve(result.data.isUsernameOrEmailExist))
      .catch((err: any) => console.log(err));
  });
    

}