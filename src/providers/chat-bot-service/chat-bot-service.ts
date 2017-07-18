import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class ChatBotServiceProvider {

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello ChatBotServiceProvider Provider');
  }

  sendRequest(request) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken});
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this._appGlobals.baseUrl, request, options).toPromise();
    return this.http.post(this._appGlobals.baseUrl +"api/wit", request, options).toPromise();
  }
}
