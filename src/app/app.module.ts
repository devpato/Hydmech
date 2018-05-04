import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalcPage } from '../pages/calc/calc';
import { MainPage } from '../pages/main/main';
import { SawTypePage } from '../pages/saw-type/saw-type';
import {ResultsPage} from '../pages/results/results';
import { FacebookPage } from '../pages/facebook/facebook';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {RoundsawPage} from '../pages/roundsaw/roundsaw';
import {MeasuretypePage} from '../pages/measuretype/measuretype';
import {MeasureTypeService} from './shared/measuretype.service';
import {CalcTypeService} from './shared/calctype.service';
import {UserService} from './shared/user.service'; 
import {TableService} from './shared/table.service';
import {VariablesService} from './shared/variables.service'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    RoundsawPage,
    MeasuretypePage,
    FacebookPage,
    CalcPage,
    ResultsPage,
    SawTypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    RoundsawPage,
    MeasuretypePage,
    FacebookPage,
    CalcPage,
    ResultsPage,
    SawTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MeasureTypeService,CalcTypeService, UserService,TableService,VariablesService
  ]
})
export class AppModule {}
