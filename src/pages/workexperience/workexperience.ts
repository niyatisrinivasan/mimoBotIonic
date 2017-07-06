import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { WorkEditPage } from '../workedit/workedit';
/**
 * Generated class for the WorkexperiencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workexperience',
  templateUrl: 'workexperience.html',
})
export class WorkexperiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

launchWorkEditPage()
{
  let modal = this.modalCtrl.create(WorkEditPage);
  modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkexperiencePage');
  }

}
