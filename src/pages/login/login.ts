import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicPage, AlertController, LoadingController, Loading, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register';
import { AppGlobals } from '../../global';
import { Push} from '@ionic-native/push';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Facebook, NativeStorage]
})
export class LoginPage {
  FB_APP_ID: number = 112493112702999;
  userData: any;
  loading: Loading;
  credentials = { email: '' };
  userProfile: any = null;

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public fb: Facebook, public nativeStorage: NativeStorage, public _appGlobals: AppGlobals,public push: Push) {
    this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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

    // self.auth.login(self.credentials).then(response => { //retrieves the response of authentication after sending a request
    //   console.log(response)
    //   if (response = null) { //not authenticated == accessToken is not generated
    //     //create alert with " Access denied"
    //     self.showError(response); //response.message == "Sorry, got error message"
    //   }

    //   self._appGlobals.setIdToken(response) //to set token so that it can be attached to the header for each request made
    //   //otherwise

    //   this.nav.setRoot(HomePage)
    // })
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

  //  FB Login methods
  doFbLogin() {
    let permissions = new Array<string>();
    let nav = this.nav;
    let env = this;
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    this.fb.login(permissions)
      .then(function (response) {
        let userId = response.authResponse.userID;
        let params = new Array<string>();
        console.log(response)
        console.log(userId)

        //Getting name and gender properties
        env.fb.api("/me?fields=id,name,email,birthday,gender", params)
          .then(function (userData) {
            console.log(userData)

            userData.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            //now we have the users info, let's save it in the NativeStorage
            env.nativeStorage.setItem('localUserData',
              {
                name: userData.name,
                gender: userData.gender,
                picture: userData.picture
              })
              .then(function () {

                nav.push(ProfilePage)
                //   env.nativeStorage.getItem('localUserData').then(function (localUserData) {
                //     console.log(localUserData)

                //     env.userData = {
                //       "name": localUserData.name,
                //       "gender": localUserData.gender,
                //       "picture": localUserData.picture
                //     }

                //     console.log(localUserData)
                //     // nav.push(ProfilePage, this.userData);
              }, function (error) {
                console.log(error);
              })
          }, function (error) {
            console.log("e1" + error);
          })
      }, function (error) {
        console.log("e2" + error);
      });
  }
}