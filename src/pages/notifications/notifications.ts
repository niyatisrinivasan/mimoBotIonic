import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Platform, AlertController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popover/popover';
import { noti } from '../../notificationData';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  Title: any;
  Description: any;
  DateSent: any;
  RecordStatus: any;
  LastUpdated: any;
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;
  notificationData: any = {

  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController,
  ) {
    this.notifyTime = moment(new Date()).format();

    this.chosenHours = new Date().getHours();
    this.chosenMinutes = new Date().getMinutes();

    this.days = [
      { title: 'Monday', dayCode: 1, checked: false },
      { title: 'Tuesday', dayCode: 2, checked: false },
      { title: 'Wednesday', dayCode: 3, checked: false },
      { title: 'Thursday', dayCode: 4, checked: false },
      { title: 'Friday', dayCode: 5, checked: false },
      { title: 'Saturday', dayCode: 6, checked: false },
      { title: 'Sunday', dayCode: 0, checked: false }
    ];

    this.notificationData = noti
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notifications');
    console.log(this.notificationData);
  }
  timeChange(time) {

  }

  addNotifications() {

  }

  cancelAll() {

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
