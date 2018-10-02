import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BladetypePage } from '../bladetype/bladetype';
import { ProductivityPage } from '../productivity/productivity';
import {BladeTypeService} from '../../app/shared/bladetype.service';
import {GroupsService} from '../../app/shared/groups.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
/**
 * Generated class for the VerticalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vertical',
  templateUrl: 'vertical.html',
})
export class VerticalPage {
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private bladetype : BladeTypeService,
  private groupService : GroupsService, private measuretype : MeasureTypeService ) {}

  ionViewDidLoad() {
    this.populateMaterialShapeDropdown();
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

  populateMaterialShapeDropdown() {
    this.groupService.getGroups().subscribe(
      data => {
        this.bimetalSubGroups =  data.json()
        if(this.bimetalSubGroups.length > 0 ) {
          this.bimetalDropdown = this.bimetalSubGroups.filter(
            group=> {
              return group.A == this.bladetype.getBladeTypeSelected();
            }           
          )
        }
      }        
    ); 
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
}
