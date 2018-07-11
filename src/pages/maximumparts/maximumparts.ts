import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MaximumpartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maximumparts',
  templateUrl: 'maximumparts.html',
})
export class MaximumpartsPage {
  cuttingSpeed = 0;
  feedRate = 0;
  cuttinRate = 0;
  optimumTooth = 0;
  cutTime = 0;
  cyecleTime = 0;
  toothJob = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {}

  ionViewDidLoad() {}

  onOpenMenu(){
    this.menuCtrl.open();    
  }

}
