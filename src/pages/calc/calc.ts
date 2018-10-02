import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
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
  toolsValue:number; 
  rateValue: any = '80%';
  genericRow: any;
  meType;
  mesType;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private measuretype: MeasureTypeService, private calctype: CalcTypeService, private variables: VariablesService,
   private menuCtrl: MenuController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {}

  ngOnInit() {
    this.meType = this.measuretype.getMeasureType();
    console.log(this.meType);
    console.log(this.calctype.getCalcType());
    this.mesType = this.meType === 'imperial' ? 'in' : 'mm';
  }

  openResultsPage() {
    /*console.log(this.maxMaterialValue);
    console.log(this.diameterValue);
    console.log(this.cutLengthValue);
    console.log(this.masterBarValue);
    console.log(Number(this.rateValue)/100);
    console.log("Selected :" + this.toolsValue);*/
    this.rateValue = parseInt(this.rateValue.replace(/%/g, ''));
    console.log("rate value");
    console.log(this.rateValue);

    if(this.maxMaterialValue != 0 || this.diameterValue != 0 || this.cutLengthValue != 0 || this.masterBarValue != 0  || this.rateValue != 0) {
        this.variables.setDiameter(this.meType === 'imperial' ? Number(this.diameterValue/25.4) : Number(this.diameterValue));
        this.variables.setMaterialDiameter(this.meType === 'imperial' ? Number(this.maxMaterialValue/25.4) : Number(this.maxMaterialValue) );
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

        this.variables.setRPM(this.meType === 'imperial' ? Number(this.maxMaterialValue/25.4) : Number(this.maxMaterialValue));
        this.variables.setTrim(50); //could be in mm/in
        this.variables.setMasterBarLength(Number(this.masterBarValue));
        this.variables.setBRT();
        this.variables.setPiecesPerBar(this.meType === 'imperial' ? Number(this.cutLengthValue/25.4) : Number(this.cutLengthValue),2.80);
        this.variables.setTotalBarsNeeded();
        this.variables.setPartOver1000mm(this.meType === 'imperial' ? Number(this.cutLengthValue/25.4) : Number(this.cutLengthValue));
        this.variables.setRatePerHour(this.rateValue);
        this.variables.setMachine(this.meType === 'imperial' ? Number(this.maxMaterialValue/25.4) : Number(this.maxMaterialValue));
        this.variables.getBlade(this.meType === 'imperial' ? Number(this.maxMaterialValue/25.4) : Number(this.maxMaterialValue));
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
    } else {
      const alert = this.alertCtrl.create({
        title:'Error',
        subTitle: "Can't open the results page.",
        message: "Please enter a numeric value in all the fields.",
        buttons: [
          {
            text: 'Close',            
          }
        ]
      });
      alert.present();
    }
   
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }
}
