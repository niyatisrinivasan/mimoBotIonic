import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, AlertController, LoadingController, Loading, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../../pages/register/register';
import { AppGlobals } from '../../global';
import {UserPage} from '../user/user';
import {passwordHash} from '@angular/password-hash';
import { Injectable } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  FB_APP_ID: number = 112493112702999;
  userData: any;
  loading: Loading;
  credentials = { email: '' };
  userProfile: any = null;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public fb: Facebook, public nativeStorage: NativeStorage, public _appGlobals: AppGlobals) {
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  public createAccount() {
    this.nav.push(RegisterPage);
  }

  public forgotPassword(text) {
    this.alertCtrl.create({
      title: 'Email',
      subTitle: text,
      buttons: ['Submit']

    })

  }
  public login() {
    let self = this
    this.showLoading()
      
    //call method to generateHash(password) //return generateHash
    //credentials["passwordHash"] = generateHash //adds an attribute to the json object credentials

    self.auth.login(self.credentials).then(response => { //retrieves the response of authentication after sending a request
      console.log(response)
      if (response = null) { //not authenticated == accessToken is not generated
        //create alert with " Access denied"
        self.showError(response); //response.message == "Sorry, got error message"
      }

      self._appGlobals.setIdToken(response) //to set token so that it can be attached to the header for each request made
      //otherwise
      this.nav.setRoot(HomePage)
    })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  //  FB Login methods
  doFbLogin() {
    console.log("haha")
    let permissions = new Array<string>();
    let nav = this.nav;
    let env = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    this.fb.login(permissions)
      .then(function (response) {
        let userId = response.authResponse.userID;
        let params = new Array<string>();

        //Getting name and gender properties
        env.fb.api("response.authResponse.userID/?fields=id,name,email,birthday,gender", params)
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
                this.userData = {
                  name: user.name,
                  gender: user.gender,
                  picture: user.picture
                }
                // console.log("haha");
                nav.push(UserPage, this.userData);
              }, function (error) {
                console.log("e1" + error);
              })
          })
      }, function (error) {
        console.log("e2" + error);
      });

  }

}