import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main';
import { MeasuretypePage } from '../pages/measuretype/measuretype';
import { BladetypePage } from '../pages/bladetype/bladetype';
import { ResultsPage } from '../pages/results/results';
import { HomePage } from '../pages/home/home';
import { CalcPage } from '../pages/calc/calc';
import { AutomaticPage } from '../pages/automatic/automatic';
import { HorizontalPage } from '../pages/horizontal/horizontal';
import { VerticalPage } from '../pages/vertical/vertical';
import { UserService } from './shared/user.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BladetypePage; // don't forget to change it to HomePage so home because the first page in the app
  mainPage = MainPage;
  settingsPage = ResultsPage;
  username : string;
  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  private menuCtrl: MenuController,
  private userService: UserService) {   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();     
      
    });
  }

  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
    
  }

  setUsernameOnMenu(username: string) {
     this.username = username;
     console.log("username");
  }
}

