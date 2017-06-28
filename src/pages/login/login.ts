import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  FB_APP_ID: number = 112493112702999;

  constructor(public navCtrl: NavController, public fb: Facebook, public nativeStorage: NativeStorage) {
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  doFbLogin() {
    console.log("haha")
    let permissions = new Array<string>();
    let nav = this.navCtrl;
    let env = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    this.fb.login(permissions)
      .then(function (response) {
        let userId = response.authResponse.userID;
        let params = new Array<string>();

        //Getting name and gender properties
        env.fb.api("/me?fields=name,gender", params)
          .then(function (user) {
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            //now we have the users info, let's save it in the NativeStorage
            env.nativeStorage.setItem('user',
              {
                name: user.name,
                gender: user.gender,
                picture: user.picture
              })
              .then(function () {
                // console.log("haha");
                nav.push(UserPage);
              }, function (error) {
                console.log("e1" + error);
              })
          })
      }, function (error) {
        console.log("e2" + error);
      });

  }

}