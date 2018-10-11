import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BladetypePage } from '../bladetype/bladetype';
import { ProductivityPage } from '../productivity/productivity';
import {BladeTypeService} from '../../app/shared/bladetype.service';
import {GroupsService} from '../../app/shared/groups.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
/**
 * Generated class for the HorizontalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horizontal',
  templateUrl: 'horizontal.html',
})
export class HorizontalPage {
  ProductivityPage = ProductivityPage;
  bimetalSubGroups : any
  bimetalDropdown : any
  selectedSub: any
  stockLengthValue : any
  cutLengthValue : any
  totalCutsValue: any 
  index : number
  widthValue: number
  arraySelection : any
  groupTemp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private bladetype : BladeTypeService,
  private groupService : GroupsService, private measuretype : MeasureTypeService, private bladeType : BladeTypeService ) {}

  ionViewDidLoad() {
       this.setGroupsDropDown();
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage() {
    this.setSelectedSubGroup(this.selectedSub); 
    this.stockLengthValue = ''
    this.cutLengthValue = ''
    this.totalCutsValue = ''
    this.selectedSub = 'default';
    this.navCtrl.push(this.ProductivityPage);
  }

  setSelectedSubGroup(selected) {
    this.arraySelection = selected.split('-');
    this.index =  this.arraySelection[1];
    this.widthValue =  this.arraySelection[0];
    this.bladetype.setSelectedItem(this.bimetalDropdown[this.index]);
    this.bladetype.setStockLengthValue(this.stockLengthValue);
    this.bladetype.setCutLengthValue(this.cutLengthValue);
    this.bladetype.setTotalCutsValue(this.totalCutsValue);
    this.bladetype.setWidthValue(this.widthValue);
  }

   setGroupsDropDown() {
    if ( this.bladeType.getBladeType() === 'bimetal') {
       this.getBimetalGroups();
    } else {
       this.getCarbonGroups();
    }
  }

  getBimetalGroups() {
    if( this.measuretype.getMeasureType() === 'metric' ) {
      this.groupService.getBimetalMetricGroups().subscribe(
        data => {
            this.groupTemp = JSON.parse(JSON.stringify(data.json()));
            this.groupTemp = this.groupTemp.filter((group=> group.A === this.bladeType.getBladeTypeSelected()));
        }        
      );
    } else {
      this.groupService.getBimetalImperialGroups().subscribe(
        data => {
            this.groupTemp = JSON.parse(JSON.stringify(data.json()));
            this.groupTemp = this.groupTemp.filter((group=> group.A === this.bladeType.getBladeTypeSelected()));
            for(let i=0; i<this.groupTemp.length; i++) {
              this.groupTemp[i].C = Math.round(this.groupTemp[i].C);
            }
        }        
      );
    }     
  }

   getCarbonGroups() {
       if( this.measuretype.getMeasureType() === 'metric' ) {
      this.groupService.getCarbonMetricGroups().subscribe(
        data => {
            this.groupTemp = JSON.parse(JSON.stringify(data.json()));
            this.groupTemp = this.groupTemp.filter((group=> group.A === this.bladeType.getBladeTypeSelected()));
        }        
      );
    } else {
      this.groupService.getCarbonImperialGroups().subscribe(
        data => {
            this.groupTemp = JSON.parse(JSON.stringify(data.json()));
            this.groupTemp = this.groupTemp.filter((group=> group.A === this.bladeType.getBladeTypeSelected()));
            for(let i=0; i<this.groupTemp.length; i++) {
              this.groupTemp[i].C = Math.round(this.groupTemp[i].C);
            }
        }        
      );
    }     
  }


  setSelectedGroup(bladeTypeSelected) {
    this.bladeType.setBladeTypeSelected(bladeTypeSelected)
    console.log(bladeTypeSelected);
  }
}
