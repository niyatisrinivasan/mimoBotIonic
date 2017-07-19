import { Component } from '@angular/core';
import { Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push'
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push, public alertCtlr: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushsetup();
    });
  }
  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: '467862247498'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'

      },
      windows: {}
    };
    const PushObject: PushObject = this.push.init(options);

    PushObject.on('notification').subscribe((notification: any) => {
        if(notification.additionalData.foreground){
            let youralert = this.alertCtlr.create({ //use toast
              title: 'New Push Notification',
              message: notification.message
            });
            youralert.present();
        }
    });

    //use toast instead
    PushObject.on('registration').subscribe((registration: any) => console.log(registration)); //registrationId

    PushObject.on('error').subscribe(error => alert('Error with push plugin'+ error));

  }
}

