import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResetpasswordPage } from "../pages/resetpassword/resetpassword";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";

import { AuthService } from "../providers/auth-service";

const firebaseConfig = {
  apiKey: "AIzaSyBV_U1SstXemDqwqUsZbU6-mhqtVhfGbnM",
  authDomain: "exemplo-ionic.firebaseapp.com",
  databaseURL: "https://exemplo-ionic.firebaseio.com",
  projectId: "exemplo-ionic",
  storageBucket: "exemplo-ionic.appspot.com",
  messagingSenderId: "359978292267"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ResetpasswordPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResetpasswordPage,
    SigninPage, 
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
