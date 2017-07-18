import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers } from '@angular/http';
import 'rxjs';
import { AppGlobals } from '../../global';

@Injectable()
export class JobServiceProvider {
  bookmarks = []

  constructor(public http: Http, public _appGlobals: AppGlobals) {
    console.log('Hello JobServiceProvider Provider');
  }

  getAllJobs() {
    let headers = new Headers({ 'Content-Type': 'application/json',  'x-access-token': this._appGlobals.accessToken});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this._appGlobals.baseUrl + "api/jobs", options).toPromise();
  }

  addToBookmarks(jobId, userId) {
    var bookmarksData = JSON.stringify({"jobId": jobId, "userId": userId})
    this.bookmarks.push(bookmarksData)
  }

  getAllBookmarks() {
    if (this.bookmarks.length > 0) {
      return this.bookmarks
    }
  }

  // removeFromBookmarks(jobId, userId) {
  //   var bookmarksData = JSON.stringify({"jobId": jobId, "userId": userId})
  //   this.bookmarks.remove(bookmarksData)
  // }

  applyForJob(job) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._appGlobals.baseUrl + "api/apply", job, options).toPromise();
  }
  ///////////////////////////////////////////////////////////////////////////
  //////////////////////// with backend integration ////////////////////////
  /////////////////////////////////////////////////////////////////////////
  // getAllBookmarks() {
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.get(this._appGlobals.baseUrl + "api/bookmarks", options).toPromise();
  // }

  // addToBookmarks(jobId, userId) {
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
  //   let options = new RequestOptions({ headers: headers });

  //   var bookmarksData = JSON.stringify({"jobId": jobId, "userId": userId})
  //   return this.http.post(this._appGlobals.baseUrl + "api/bookmarks", bookmarksData, options).toPromise();
  // }

  // removeFromBookmarks(jobId, userId) {
  //   let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': this._appGlobals.accessToken });
  //   let options = new RequestOptions({ headers: headers });
  
  //   var bookmarksData = JSON.stringify({"jobId": jobId, "userId": userId})
  //   return this.http.post(this._appGlobals.baseUrl + "api/bookmarks", bookmarksData, options).toPromise();
  // }
}
