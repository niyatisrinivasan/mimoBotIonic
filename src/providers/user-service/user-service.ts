import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class UserServiceProvider {
  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider');
  }
   public getUserInfo() : User {
    return this.currentUser;
  }
 

}
