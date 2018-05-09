import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BladetypePage } from '../bladetype/bladetype';
/**
 * Generated class for the HorizontalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horizontal',
  templateUrl: 'horizontal.html',
})
export class HorizontalPage {
  bladeTypePage = BladetypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorizontalPage');
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage() {
    this.navCtrl.push(this.bladeTypePage);
  }

}
