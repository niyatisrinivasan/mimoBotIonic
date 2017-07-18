import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController, MenuController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { PopoverPage } from '../../pages/popover/popover';
import { JobServiceProvider } from '../../providers/job-service/job-service';
import { jobs } from '../../jobListTemp';
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  isBookmarked: boolean
  jobList: any[]
  userId: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public jobServiceProvider: JobServiceProvider) {
    this.isBookmarked = false
    this.userId = 'adfd2434jijs'
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bookmarks');
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

  openMenu() { //executes when the menu is tapped
    // this.appCtrl.getRootNav().setRoot(MenuPage);
    this.menuCtrl.open()
  }

  getBookmarks() {
    this.jobServiceProvider.getAllBookmarks()
  }

  addToBookmarks(jobId) {
    console.log(jobId)

    
    this.jobServiceProvider.addToBookmarks(jobId, this.userId)
  }
}
