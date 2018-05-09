import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MaximumpartsPage } from '../maximumparts/maximumparts';
import { BalacebladePage } from '../balaceblade/balaceblade';


/**
 * Generated class for the ProductivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productivity',
  templateUrl: 'productivity.html',
})
export class ProductivityPage {
  maxPage = MaximumpartsPage;
  balaePage = BalacebladePage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductivityPage');
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage(resultsFor : String) {
    let page : any;
    resultsFor === 'maximum' ? page = this.maxPage : page = this.balaePage;
    this.navCtrl.push(page);
  }
}
