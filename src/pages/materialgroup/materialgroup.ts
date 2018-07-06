import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HorizontalPage } from '../horizontal/horizontal';
import { VerticalPage } from '../vertical/vertical';
import { BandsawService }  from '../../app/shared/bandsaw.service'
import {GroupsService} from '../../app/shared/groups.service';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
    private bandsawService : BandsawService, private groups: GroupsService
    ) {
  }

  ionViewDidLoad() {
    this.bimetalGroups = this.getBimetalGroups();
    console.log(this.bimetalGroups);
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

  }

  getBimetalGroups() {
    return this.groups.getBimetalGroups().subscribe(
        data => console.log(data.json())
      );
  }

}
