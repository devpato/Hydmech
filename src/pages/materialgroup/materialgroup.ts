import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HorizontalPage } from '../horizontal/horizontal';
import { VerticalPage } from '../vertical/vertical';
import { BandsawService }  from '../../app/shared/bandsaw.service'
import {GroupsService} from '../../app/shared/groups.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import * as _ from 'underscore';
import {BladeTypeService} from '../../app/shared/bladetype.service';


/**
 * Generated class for the MaterialgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materialgroup',
  templateUrl: 'materialgroup.html',
})

export class MaterialgroupPage {
  horizontalPage = HorizontalPage;
  verticalPage = VerticalPage;
  bimetalGroups: any;
  carbonGroups: any;
  groupTemp: any;
  bladeTypeSelected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
    private bandsawService : BandsawService, private groups: GroupsService, private measuretype : MeasureTypeService,
    private bladeType : BladeTypeService
    ) {
  }

  ionViewDidLoad() { 
    if (this.bladeType.getBladeType() === 'bimetal') {
      this.getBimetalGroups();  
    } else {
      this.getCarbonGroups()
    }  
  }

  openPage() {
    if(this.bandsawService.getOrinentation() === 'horizontal') {
        this.navCtrl.push(this.horizontalPage);
    } else {
      this.navCtrl.push(this.verticalPage);
    }
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  setGroupsDropDown() {
    if (this.measuretype.getMeasureType() === 'metric') {
       this.deleteKey('C')
    } else {
       this.deleteKey('B')
    }
    console.log(this.groupTemp)
  }

  getBimetalGroups() {
      this.groups.getGroups().subscribe(
        data => {
          this.bimetalGroups =  data.json()
          if(this.bimetalGroups.length > 0 ) {
            this.groupTemp = JSON.parse(JSON.stringify(this.bimetalGroups));
            this.setGroupsDropDown();
          }
        }        
      );
    return  this.bimetalGroups; 
  }

   getCarbonGroups() {
      this.groups.getGroups().subscribe(
        data => {
          this.carbonGroups =  data.json()
          if(this.carbonGroups.length > 0 ) {
            this.groupTemp = JSON.parse(JSON.stringify(this.carbonGroups));
            this.setGroupsDropDown();
          }
        }        
      );
    return  this.bimetalGroups; 
  }

  deleteKey(key) {
    console.log(key)
    for(var i = 0; i<this.groupTemp.length;i++) {
        delete this.groupTemp[i][key]
    }
  }

  setSelectedGroup(bladeTypeSelected) {
    this.bladeType.setBladeTypeSelected(bladeTypeSelected)
    console.log(bladeTypeSelected);
  }
}
