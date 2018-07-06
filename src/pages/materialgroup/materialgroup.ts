import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HorizontalPage } from '../horizontal/horizontal';
import { VerticalPage } from '../vertical/vertical';
import { BandsawService }  from '../../app/shared/bandsaw.service'
import {GroupsService} from '../../app/shared/groups.service';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import * as _ from 'underscore';

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
  groupTemp: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
    private bandsawService : BandsawService, private groups: GroupsService, private measuretype : MeasureTypeService
    ) {
  }

  ionViewDidLoad() { 
    this.getBimetalGroups();  
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
    this.measuretype.setMeasureType('metric');
    if (this.measuretype.getMeasureType() === 'metric') {
       this.deleteKey('C')
    } else {
       this.deleteKey('B')
    }
  }

  getBimetalGroups() {
      this.groups.getBimetalGroups().subscribe(
        data => {
          this.bimetalGroups =  data.json()
          if(this.bimetalGroups.length > 0 ) {
            this.groupTemp = JSON.parse(JSON.stringify(this.bimetalGroups));
            this.groupTemp.shift(); 
            this.setGroupsDropDown();
          }
        }        
      );
    return  this.bimetalGroups; 
  }

  deleteKey(key) {
    for(var i = 0; i<this.groupTemp.length;i++) {
        delete this.groupTemp[i][key]
    }
  }
}
