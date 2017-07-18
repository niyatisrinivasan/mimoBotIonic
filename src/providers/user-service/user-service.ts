import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: Http,public _appGlobals: AppGlobals) {
    console.log('Hello UserServiceProvider Provider');
  }
  getAllUser() {
    let headers = new Headers({ 'Content-Type': 'application/json',  'x-access-token': this._appGlobals.accessToken});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl + "api/user", options).toPromise();
  }
  updateAllUserDetails(userId, user){
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this._appGlobals.baseUrl + "api/user" + userId, user, options).toPromise(); 
  }

}
