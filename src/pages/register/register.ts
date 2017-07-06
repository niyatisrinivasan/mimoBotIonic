import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  createSuccess = false;
  credentials = { email: '', name: '', address: '', gender: '', country: '' };
  loading: Loading;
  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  public register() {
    this.showLoading()

    //call method to generateHash(password) //return generateHash
    //credentials["passwordHash"] = generateHash //adds an attribute to the json object credentials

    this.auth.register(this.credentials).then(response => { //retrieves the response of authentication after sending a request
      console.log(response)
      //check if a token is generated
      if (response = null) { //not authenticated == accessToken is not generated
        //create alert with " Access denied"
        this.showError(response); //response.message == "Sorry, got error message"
      }

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

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.setRoot(ProfilePage, this.credentials); //this. is for each instance. Take from current instance and push it
            }
          }
        }
      ]
    });
    alert.present();
  }

}
