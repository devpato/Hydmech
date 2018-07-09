import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AutomaticPage } from '../automatic/automatic';
import { HorizontalPage } from '../horizontal/horizontal';
import { VerticalPage } from '../vertical/vertical';
import { BandsawService }  from '../../app/shared/bandsaw.service'
import { BladetypePage } from '../bladetype/bladetype';
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
  horizontalPage = HorizontalPage;
  verticalPage = VerticalPage;
  autoManual : String;
  auto = true;
  manual = true;
  horizontal = true;
  vertical = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private bandsawService : BandsawService) {
  }

  ionViewDidLoad() {}
 
  setManualAuto(type : String) {
    this.autoManual = type;
    if(type === 'auto') {
      this.auto = false;
      this.manual = true;
    } else {
      this.auto = true;
      this.manual = false;
    }
  }

  getManualAuto() {
    return this.autoManual;
  }

  setMyOrientation(orientation : String) {
    this.bandsawService.setOrinentation(orientation);
     if(orientation === 'vertical') {
      this.vertical = false;
      this.horizontal = true;
    } else {
     this.vertical = true;
      this.horizontal = false;
    }
  }

  openAutomaticPage() {
    if(this.getManualAuto() === 'auto') {
      this.navCtrl.push(this.autoPage);
    } else {
      /* if(this.bandsawService.getOrinentation() === 'horizontal') {
         this.navCtrl.push(this.horizontalPage);
       } else {
         this.navCtrl.push(this.verticalPage);
       }*/
       this.navCtrl.push(BladetypePage)
    }
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

}
