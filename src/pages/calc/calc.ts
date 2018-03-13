import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import {CalcTypeService} from '../../app/shared/calctype.service';
import {ResultsPage} from '../results/results';
import {VariablesService} from '../../app/shared/variables.service'

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
  rateValue: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private measuretype: MeasureTypeService, private calctype: CalcTypeService, private variables: VariablesService) {
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
    console.log(this.rateValue);
    console.log("Selected :" + this.toolsValue);
    this.variables.setDiameter(this.diameterValue);
    this.variables.setMaterialDiameter(this.maxMaterialValue);
    this.variables.populateTable();
    console.log(this.variables.carbonTable);
    console.log(this.variables.getCarbonRow())
    this.navCtrl.push(this.resultsPage);
  }
}
