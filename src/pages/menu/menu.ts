import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { BookmarksPage } from '../../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../../pages/applications/applications';
import { NotificationsPage } from '../../pages/notifications/notifications';
import { ChatPage } from '../../pages/chat/chat';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

export class MenuPage {
  pages = []

  private rootPage;
  private bookmarkPage;
  private applicationPage;
  private notificationPage;
  private chatPage;
  // selectedItem: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    // this.selectedItem = ""
    
    this.bookmarkPage = BookmarksPage
    this.applicationPage = ApplicationsPage
    this.notificationPage = NotificationsPage
    this.chatPage = ChatPage

    this.pages = [
      { name: 'View Bookmarks', component: this.bookmarkPage },
      { name: 'Previous Applications', component: this.notificationPage },
      { name: 'Notifications', component: this.applicationPage },
      { name: 'Logout', component: null },
      { name: '', component: this.chatPage }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

  openPage(p) {
    this.rootPage = p
    // this.selectedItem = page
    // this.rootPage = page.component
    // this.viewCtrl.dismiss(this.selectedItem)
    // this.appCtrl.getRootNav().setRoot(this.rootPage)
  }
}
