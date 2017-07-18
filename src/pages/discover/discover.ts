import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { JobDescriptionPage } from '../../pages/job-description/job-description';
import { PopoverPage } from '../../pages/popover/popover';
import { JobServiceProvider } from '../../providers/job-service/job-service';
import { jobs } from '../../jobListTemp';

@IonicPage()
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage {
  jobList: any[]
  userId: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public jobService: JobServiceProvider) {

    this.userId = 'adfd2434jijs'
    // this.jobList = navParams.get('list')
    this.getAllJobs();
  }

  gotJobs: boolean = false

  getAllJobs() { //with backend integration
    let self = this
    self.jobList = jobs

    if (self.jobList.length > 0) {
      self.gotJobs = true
    } else {
      self.gotJobs = true
    }

    console.log(self.gotJobs)
  }

  ///////////////////////////////////////////////////////////////////////////
  //////////////////////// with backend integration ////////////////////////
  /////////////////////////////////////////////////////////////////////////
  // getAllJobs() { 
  //   let self = this
  //   self.jobService.getAllJobs().then(function (result) { //calls service
  //     self.jobList = result.json()

  //     if (self.jobList.length > 0) {
  //       self.gotJobs = true
  //     } else {
  //       self.gotJobs = true
  //     }
  //   })
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Discover');
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

  getBookmarks() {
    this.jobService.getAllBookmarks()
  } 

  addToBookmarks(jobId) {
    console.log(jobId)
    this.jobService.addToBookmarks(jobId, this.userId)
  }

  applyForJob(job) {
    this.jobService.applyForJob(job).then(function (result) {
      console.log("Successfully applied for " + job.JobTitle)
    })
  }

  viewOneJob(selectedJob) {
    console.log(selectedJob)
    this.navCtrl.push(JobDescriptionPage, { job: selectedJob })
  }
}
