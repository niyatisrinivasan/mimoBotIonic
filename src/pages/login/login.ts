import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, AlertController, LoadingController, Loading, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../../pages/register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  FB_APP_ID: number = 112493112702999;
  userData: any;
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  userProfile: any = null;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public fb: Facebook, public nativeStorage: NativeStorage) {
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
    this.showLoading()

    this.auth.login(this.registerCredentials).subscribe(allowed => {

      if (allowed) {
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Access Denied");
      }
    },
    )

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