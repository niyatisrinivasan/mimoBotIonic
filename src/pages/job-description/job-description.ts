import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';

@IonicPage()
@Component({
  selector: 'page-job-description',
  templateUrl: 'job-description.html',
})

export class JobDescriptionPage {
  job: any
  jobQualification: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.job = navParams.get("job")
    this.jobQualification = this.job.JobQualification
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDescriptionPage');
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
