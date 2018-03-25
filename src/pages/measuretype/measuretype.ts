import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {CalcTypeService} from '../../app/shared/calctype.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import { CalcPage } from '../calc/calc';
/**
 * Generated class for the MeasuretypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-measuretype',
  templateUrl: 'measuretype.html',
})
export class MeasuretypePage {
  calcPage = CalcPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private measuretype: MeasureTypeService, private calctype: CalcTypeService, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasuretypePage');
  }
  openCalcPage(measuretype: string) {
      this.measuretype.setMeasureType(measuretype);
      this.navCtrl.push(this.calcPage);
   
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }


}
