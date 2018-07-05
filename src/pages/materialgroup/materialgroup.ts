import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { HorizontalPage } from '../horizontal/horizontal';
import { VerticalPage } from '../vertical/vertical';
import { BandsawService }  from '../../app/shared/bandsaw.service'

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController,
    private bandsawService : BandsawService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialgroupPage');
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

}
