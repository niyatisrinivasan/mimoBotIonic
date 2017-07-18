import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';

@IonicPage()
@Component({
  selector: 'page-uploadresume',
  templateUrl: 'uploadresume.html',
})
export class UploadResumePage {
  resumes = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
    this.resumes = [
      {
        "name": "abc",
      },
      {
        "name": "def",
      },
      {
        "name": "ghi",
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Uploadresume');
  }

  haha() {
    console.log("haha")
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

}
