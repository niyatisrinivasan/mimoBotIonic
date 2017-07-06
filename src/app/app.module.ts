import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import {passwordHash} from '@angular/password-hash';
import { Facebook } from '@ionic-native/facebook';
import { ProfilePage } from '../pages/profile/profile';
import {RegisterPage} from '../pages/register/register';
import { AuthService } from './../providers/auth-service/auth-service';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { WorkexperiencePage } from '../pages/workexperience/workexperience';
import { WorkEditPage } from '../pages/workedit/workedit';
import { UserServiceProvider } from '../providers/user-service/user-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    LoginPage,
    RegisterPage,
    WorkexperiencePage,
    WorkEditPage
   ],
  imports: [
    BrowserModule,
    ProfilePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    WorkexperiencePage,
    WorkEditPage
  
  ],
  providers: [
    NativeStorage,
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    passwordHash,
    UserServiceProvider
  ]
})
export class AppModule { }
