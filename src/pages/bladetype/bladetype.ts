import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProductivityPage } from '../productivity/productivity';

/**
 * Generated class for the BladetypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bladetype',
  templateUrl: 'bladetype.html',
})
export class BladetypePage {
  productivityPage = ProductivityPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BladetypePage');
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage(bladeType : String) {
    this.navCtrl.push(this.productivityPage);
  }

}
