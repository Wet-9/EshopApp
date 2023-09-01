import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductTempPageRoutingModule } from './product-temp-routing.module';

import { ProductTempPage } from './product-temp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductTempPageRoutingModule
  ],
  declarations: [ProductTempPage]
})
export class ProductTempPageModule {}
