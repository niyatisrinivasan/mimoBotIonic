import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController, AlertController } from 'ionic-angular';
import { WorkeditPage } from '../workedit/workedit';
import { PopoverPage } from '../../pages/popover/popover';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public popoverCtrl: PopoverController,public alertCtrl: AlertController) {
  }

launchWorkEditPage()
{
  this.navCtrl.push(WorkeditPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkexperiencePage');
  }
  openPopover(myEvent) { //executes when the fabButton is tapped
    let popover = this.popoverCtrl.create(PopoverPage)

    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
    })
  }
  showPrompt() {
let prompt = this.alertCtrl.create({
title: 'Update',
      message: "Update and save the fields",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Job Name'
        },
        {
          name: 'Description',
          placeholder: 'Job Description'
        },
        {
          name: 'Start Date',
          placeholder: 'Start Date'
        },
        {
          name: 'End Date',
          placeholder: 'End Date'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]});
    prompt.present();
  }  


}

