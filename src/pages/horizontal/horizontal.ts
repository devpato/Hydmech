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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private bladetype : BladeTypeService,
  private groupService : GroupsService, private measuretype : MeasureTypeService ) {
  }

  ionViewDidLoad() {}

  onOpenMenu(){
    this.menuCtrl.open();    
  }

  openPage() {
    this.navCtrl.push(this.ProductivityPage);
  }

  populateMaterialShapeDropdown() {

  }

}
