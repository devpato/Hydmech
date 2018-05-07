import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductivityPage } from './productivity';

@NgModule({
  declarations: [
    ProductivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductivityPage),
  ],
})
export class ProductivityPageModule {}
