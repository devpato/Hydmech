import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import {CalcTypeService} from '../../app/shared/calctype.service';
import {ResultsPage} from '../results/results';
/**
 * Generated class for the CalcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class CalcPage {
  resultsPage = ResultsPage;
  maxMaterialValue: number;
  diameterValue: number;
  cutLengthValue: number;
  masterBarValue: number;
  toolsValue: number; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private measuretype: MeasureTypeService, private calctype: CalcTypeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcPage');
  }

  ngOnInit() {
    console.log(this.measuretype.getMeasureType());
    console.log(this.calctype.getCalcType());
  }

  openResultsPage() {
    console.log(this.maxMaterialValue);
    console.log(this.diameterValue);
    console.log(this.cutLengthValue);
    console.log(this.masterBarValue);
    console.log("Selected :" + this.toolsValue);
    this.navCtrl.push(this.resultsPage);
  }
}
