import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerticalPage } from './vertical';

@NgModule({
  declarations: [
    VerticalPage,
  ],
  imports: [
    IonicPageModule.forChild(VerticalPage),
  ],
})
export class VerticalPageModule {}
