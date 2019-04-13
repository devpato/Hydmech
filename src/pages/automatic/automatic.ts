import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
// import { BandsawService }  from '../../app/shared/bandsaw.service'
import { BladetypePage } from '../bladetype/bladetype';

/**
 * Generated class for the AutomaticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-automatic',
  templateUrl: 'automatic.html',
})
export class AutomaticPage {
  bladeType = BladetypePage;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {}

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage() {
      this.navCtrl.push(this.bladeType);
  }

}
