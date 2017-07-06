import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { WorkexperiencePage } from '../workexperience/workexperience';

/**
 * Generated class for the WorkeditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workedit',
  templateUrl: 'workedit.html',
})
export class WorkEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
closeModal() {
    console.log("hello");
    this.viewCtrl.dismiss();
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkeditPage');
  }
  
  

}
