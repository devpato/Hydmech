import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { FacebookPage } from '../facebook/facebook';
import { InAppBrowser,  InAppBrowserOptions } from '@ionic-native/in-app-browser';
import {RoundsawPage} from '../roundsaw/roundsaw';
import {MeasuretypePage} from '../measuretype/measuretype';
import {MeasureTypeService} from '../../app/shared/measuretype.service';
import {CalcTypeService} from '../../app/shared/calctype.service';
import {UserService} from '../../app/shared/user.service';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class MainPage {
  measureTypePage  = MeasuretypePage
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private theInAppBrowser: InAppBrowser,
    private measuretype: MeasureTypeService, 
    private calctype: CalcTypeService,
    private menuCtrl: MenuController,
    private userService: UserService,
 ) {
    
  }

  ionViewDidLoad() {}


  public openFacebook(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
  }

  public openMeasureType(calctype) {
    this.calctype.setCalcType(calctype);
    this.navCtrl.push(this.measureTypePage);
  }

  onOpenMenu(){
    this.menuCtrl.open();    
  }
  

}
