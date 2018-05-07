import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorizontalPage } from './horizontal';

@NgModule({
  declarations: [
    HorizontalPage,
  ],
  imports: [
    IonicPageModule.forChild(HorizontalPage),
  ],
})
export class HorizontalPageModule {}
