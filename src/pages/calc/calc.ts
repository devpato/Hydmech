import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  genericRow: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private measuretype: MeasureTypeService, private calctype: CalcTypeService, private variables: VariablesService,
   private menuCtrl: MenuController) {
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
    console.log(Number(this.rateValue)/100);
    console.log("Selected :" + this.toolsValue);
    this.variables.setDiameter(this.diameterValue);
    this.variables.setMaterialDiameter(this.maxMaterialValue);
    if( this.toolsValue == 1) {
          this.variables.populateTable(this.maxMaterialValue);
          console.log(this.variables.carbonTable);
          console.log(this.variables.getCarbonRow());
    } else {
          this.genericRow = this.variables.populateGeneralObject(this.toolsValue);
          console.log(this.genericRow); 
    }

    if(this.toolsValue == 1) {
      this.variables.setBladeSpeed(180);
    } else if(this.toolsValue == 2 || this.toolsValue == 4) {
      this.variables.setBladeSpeed(80);
    } else if(this.toolsValue == 3)  {
      this.variables.setBladeSpeed(100);
    } else if(this.toolsValue == 5)  {
      this.variables.setBladeSpeed(180);
    } else {
      this.variables.setBladeSpeed(120);
    }

    this.variables.setRPM(this.maxMaterialValue);
    this.variables.setTrim(50); //could be in mm/in
    this.variables.setMasterBarLength(Number(this.masterBarValue));
    this.variables.setBRT();
    this.variables.setPiecesPerBar(Number(this.cutLengthValue),2.80);
    this.variables.setTotalBarsNeeded();
    this.variables.setPartOver1000mm(Number(this.cutLengthValue));
    this.variables.setRatePerHour(this.rateValue);
    this.variables.setMachine(Number(this.maxMaterialValue));
    this.variables.getBlade(Number(this.maxMaterialValue));
    this.variables.setToolsValue(this.toolsValue);
     if( this.toolsValue == 1) {
          this.variables.setCutTime(this.variables.getCarbonRow().toothNumber,this.variables.getCarbonRow().toothLoad);
     } else {
            this.variables.setCutTime(this.genericRow.toothNumber, this.genericRow.toothLoad);
     }
    this.variables.setCutTimePerBar();
    this.variables.setCycleTime();
    this.variables.setPCSHour(Number(this.rateValue)/100);
  
    this.navCtrl.push(this.resultsPage);
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }
}
