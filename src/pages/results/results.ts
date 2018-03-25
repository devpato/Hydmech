import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {VariablesService} from '../../app/shared/variables.service'
import {CalcPage} from '../calc/calc';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  machine = this.variables.getMachine();
  cycleTime = this.variables.getCycleTime();
  rph = this.variables.getRatePerHour() ;
  pph = this.variables.getPCSHour();
  rpm = this.variables.getRPM();
  bladeSpeed = this.variables.getBladeSpeed();
  toothLoad : any;
  cutTime = this.variables.getCutTime();
  toolsValue = this.variables.getToolsValue();
  genericRow: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,  private menuCtrl: MenuController, private variables: VariablesService) {
  }

  ionViewDidLoad() {
    console.log('RPM');
    console.log(this.variables.getRPM());
    console.log('Mater Bar Length');
    console.log(this.variables.getMasterBarLength());
    console.log('BRT');
    console.log(this.variables.getBRT());
    console.log('Pieces Per Bar');
    console.log(this.variables.getPiecesPerBar());    
    console.log('Total Bars Needed');
    console.log(this.variables.getTotalBarsNeeded());
    console.log('RPH');
    console.log(this.variables.getRatePerHour());
    console.log('Machine');
    console.log(this.variables.getMachine());
    console.log('Cut Time');
    console.log(this.variables.getCutTime());
    console.log('Cut Time Per Bar');
    console.log(this.variables.getCutTimePerBar());
    console.log('Cycle Time');
    console.log(this.variables.getCycleTime());
    console.log('PCS Hour');
    console.log(this.variables.getPCSHour());

    if( this.toolsValue == 1) {
          this.variables.populateTable(this.variables.getMaterialDiameter());          
          this.genericRow= this.variables.getCarbonRow();
    } else {
          this.genericRow = this.variables.populateGeneralObject(this.toolsValue);

    }

    this.toothLoad = this.genericRow.toothLoad;
  }

   onOpenMenu(){
    this.menuCtrl.open();    
  }
}
