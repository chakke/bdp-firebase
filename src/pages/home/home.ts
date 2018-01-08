import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BongDa69Module } from '../../providers/bongda69/bongda69';

interface ItemPage {
  name: string;
  page: string;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Array<ItemPage> = [
    { name: "API Page", page: "TestApiPage" },
    { name: "Firebase Storage", page: "FirebaseStoragePage" },
    { name: "Viet Nam Provinces", page: "VietnamProvincePage" },
    { name: "ImagePicker", page: "ImagePickerPage" },
    { name: "Danh sách sân bóng", page: "StadiumsPage" },
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mAppModule: BongDa69Module
  ) {
  }

  ionViewDidEnter() {


  }
  onClickItem(itemPage: ItemPage) {
    if (itemPage.page.length > 0) {
      this.navCtrl.push(itemPage.page);
    }
  }

}
