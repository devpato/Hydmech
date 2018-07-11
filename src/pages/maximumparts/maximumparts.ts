import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {BladeTypeService} from '../../app/shared/bladetype.service';

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
  cuttingRate = 0;
  optimumTooth = 0;
  cutTime = 0;
  cyecleTime = 0;
  toothJob = 0;
  selectedItem : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private bladeTypeService : BladeTypeService) {}

  ionViewDidLoad() {
    this.selectedItem = this.bladeTypeService.getSelectedItem();
    this.cuttingSpeed = this.selectedItem.D;
    this.feedRate =   this.selectedItem.F;
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

}
