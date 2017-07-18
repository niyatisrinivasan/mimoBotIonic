import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class AuthServiceProvider {
  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello TempServiceProvider Provider');
  }

  public login(credentials) { //forwards request to server
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this._appGlobals.baseUrl + "/signin", credentials, options).toPromise();
  }

  public register(credentials) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this._appGlobals.baseUrl + "/signup", credentials, options).toPromise();
  }

  public logout() {
  }
}