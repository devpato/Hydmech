import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {CalcTypeService} from '../../app/shared/calctype.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import { CalcPage } from '../calc/calc';
import { SawTypePage } from '../saw-type/saw-type';

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
  sawPage = SawTypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private measuretype: MeasureTypeService, private calctype: CalcTypeService,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasuretypePage');
  }

  openPage ( measuretypePassed: string) {
    if(this.calctype.getCalcType() === 'circularsaw' ) {
      this.openCalcPage(measuretypePassed);
    } else {
      this.openSawTypePage(measuretypePassed);
    }
  }
  openCalcPage(measuretype: string) {
      this.measuretype.setMeasureType(measuretype);
      this.navCtrl.push(this.calcPage);   
  }

  openSawTypePage(measuretype: string) {
      this.measuretype.setMeasureType(measuretype);
      this.navCtrl.push(this.sawPage);   
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }


}
