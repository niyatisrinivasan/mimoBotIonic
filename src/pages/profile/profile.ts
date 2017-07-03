import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name: any
  email: any
  address: any
  gender: any
  country: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

    this.name = this.navParams.get('name');
    console.log(this.name);

    this.email = this.navParams.get('email');
    console.log(this.email);

    this.address = this.navParams.get('address');
    console.log(this.address);

    this.gender = this.navParams.get('gender');
    console.log(this.gender);

    this.country = this.navParams.get('country');
    console.log(this.country);
    
  }

}
