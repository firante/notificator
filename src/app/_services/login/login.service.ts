import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  private _loggedIn: boolean = false;
  private _token: string = '';
  
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
    
  }
}