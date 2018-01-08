import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BongDa69Module } from '../../providers/bongda69/bongda69';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-test-api',
  templateUrl: 'test-api.html',
})
export class TestApiPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mAppModule: BongDa69Module,
    public mHttp: Http
  ) {

  }

  ionViewDidEnter() {
    let headers: Headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set("client_key", "adsdajkwrqlkdhasdhlasdhalsdasjdasd");

    
    this.mHttp.post("https://us-central1-aia-bongdaphui.cloudfunctions.net/api/ping", {
      username : "chahahaha",
      password : "assdasddsad"
    }, {
      headers: headers
    }).subscribe(data =>{
      console.log(data);
      
    });
    this.mAppModule.getHttpService().requestPing().subscribe(data => {
      console.log("On Request Ping Data", data);
    });
  }


}
