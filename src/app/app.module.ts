import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BongDa69Module } from '../providers/bongda69/bongda69';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

var firebaseConfig = {
  apiKey: "AIzaSyCCHTqgkVOX5e8TS_-0Ez6ZBY0RGr4fzhw",
  authDomain: "aia-bongdaphui.firebaseapp.com",
  databaseURL: "https://aia-bongdaphui.firebaseio.com",
  projectId: "aia-bongdaphui",
  storageBucket: "aia-bongdaphui.appspot.com",
  messagingSenderId: "817560232912"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BongDa69Module,    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
