import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, Nav, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { DiscoverPage } from '../pages/discover/discover';
import { HomePage } from '../pages/home/home';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { LoginPage } from '../pages/login/login';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { WorkexperiencePage } from '../pages/workexperience/workexperience';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsPage } from '../pages/notifications/notifications';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import {Push } from '@ionic-native/push';
// import { Push, PushToken } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    // public push: Push,
    public alertCtrl: AlertController
  ) {
    this.initializeApp()

      // this.push.register().then((t: PushToken) => {
      //   return this.push.saveToken(t);
      // }).then((t: PushToken) => {
      //   console.log('Token saved:', t.token);
      // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.initPushNotification();
    });
  }

  // initPushNotification() {
  //   if (!this.platform.is('cordova')) {
  //     console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
  //     return;
  //   }
  //   const options: PushOptions = {
  //     android: {
  //       senderID: '988473903942'
  //     },
  //     ios: {
  //       alert: 'true',
  //       badge: false,
  //       sound: 'true'
  //     },
  //     windows: {}
  //   };

  //   const pushObject: PushObject = this.push.init(options);

  //   pushObject.on('registration').subscribe((data: any) => {
  //     console.log('device token -> ' + data.registrationId);
  //     //TODO - send device token to server
  //   });

  //   pushObject.on('notification').subscribe((data: any) => {
  //     console.log('message -> ' + data.message);
  //     //if user using app and push notification comes
  //     if (data.additionalData.foreground) {
  //       // if application open, show popup
  //       let confirmAlert = this.alertCtrl.create({
  //         title: 'New Notification',
  //         message: data.message,
  //         buttons: [{
  //           text: 'Ignore',
  //           role: 'cancel'
  //         }, {
  //           text: 'View',
  //           handler: () => {
  //             //TODO: Your logic here
  //             this.nav.push(DetailsPage, { message: data.message });
  //           }
  //         }]
  //       });
  //       confirmAlert.present();
  //     } else {
  //       //if user NOT using app and push notification comes
  //       //TODO: Your logic on click of push notification directly
  //       this.nav.push(DetailsPage, { message: data.message });
  //       console.log('Push notification clicked');
  //     }
  //   });

  //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  // }
}

