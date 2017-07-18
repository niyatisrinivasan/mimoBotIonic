import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';
import { DiscoverPage } from '../pages/discover/discover';
import { ProfilePage } from '../pages/profile/profile';
import { WorkexperiencePage } from '../pages/workexperience/workexperience';
import { UploadResumePage } from '../pages/uploadresume/uploadresume';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { ApplicationsPage } from '../pages/applications/applications';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ChatPage } from '../pages/chat/chat';
import { MenuPage } from '../pages/menu/menu';
import { JobDescriptionPage } from '../pages/job-description/job-description';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WorkeditPage } from '../pages/workedit/workedit';
import { AppGlobals } from '../global';
import { ChatBotServiceProvider } from '../providers/chat-bot-service/chat-bot-service';
import { JobServiceProvider } from '../providers/job-service/job-service';
import { ExtractSalaryInfoPipe } from '../pipes/extract-salary-info/extract-salary-info';
import { LimitCharactersPipe } from '../pipes/limit-characters/limit-characters';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ExtractCountryNamePipe } from '../pipes/extract-country-name/extract-country-name';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push } from '@ionic-native/push';
import {DetailsPage} from '../pages/details/details';
import {TabsPage} from '../pages/tabs/tabs';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkexperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage,
    JobDescriptionPage,
    ExtractSalaryInfoPipe,
    LimitCharactersPipe,
    LoginPage,
    RegisterPage,
    WorkeditPage,
    ExtractCountryNamePipe,
    DetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    PopoverPage,
    DiscoverPage,
    ProfilePage,
    WorkexperiencePage,
    UploadResumePage,
    BookmarksPage,
    NotificationsPage,
    ApplicationsPage,
    MenuPage,
    JobDescriptionPage,
    LoginPage,
    RegisterPage,
    WorkeditPage,
    DetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppGlobals,
    ChatBotServiceProvider,
    JobServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    UserServiceProvider,
    LocalNotifications,
    Push
  ]
})
export class AppModule { }
