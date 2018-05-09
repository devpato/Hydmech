import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AutomaticPage } from '../automatic/automatic';

/**
 * Generated class for the SawTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saw-type',
  templateUrl: 'saw-type.html',
})
export class SawTypePage {
  autoPage = AutomaticPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SawTypePage');
  }

  openAutomaticPage() {
    this.navCtrl.push(this.autoPage);
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

}
