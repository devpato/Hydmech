import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BladetypePage } from '../bladetype/bladetype';
/**
 * Generated class for the VerticalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vertical',
  templateUrl: 'vertical.html',
})
export class VerticalPage {
 bladeTypePage = BladetypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerticalPage');
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage() {
    this.navCtrl.push(this.bladeTypePage);
  }
}
