import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalacebladePage } from './balaceblade';

@NgModule({
  declarations: [
    BalacebladePage,
  ],
  imports: [
    IonicPageModule.forChild(BalacebladePage),
  ],
})
export class BalacebladePageModule {}
