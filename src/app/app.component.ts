import { Component, ViewChild } from '@angular/core';
import { Platform , NavController, IonicPage, NavParams, Nav} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import {ProfilePage} from '../pages/profile/profile';
import {RegisterPage} from '../pages/register/register';
import{WorkexperiencePage} from '../pages/workexperience/workexperience';
import { WorkEditPage } from '../pages/workedit/workedit';
import {passwordHash} from '@angular/password-hash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor
  (
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, public nativeStorage: NativeStorage,
  ){
    platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      let env = this;
      this.nativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        env.nav.push(UserPage);
        splashScreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        //env.nav.push(LoginPage);
        splashScreen.hide();
      });

      statusBar.styleDefault();
    });
  }
}
