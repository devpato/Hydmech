import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {BladeTypeService} from '../../app/shared/bladetype.service';
import { MaterialgroupPage } from '../materialgroup/materialgroup';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private menuCtrl: MenuController, private bladeType : BladeTypeService) {
  }

  ionViewDidLoad() {}

   openPage ( bladeType: string) {
      this.openMaterialGroupPage(bladeType);
  }

  openMaterialGroupPage(bladeType: string) {
      this.bladeType.setBladeType(bladeType);
      this.navCtrl.push(MaterialgroupPage);   
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

}
