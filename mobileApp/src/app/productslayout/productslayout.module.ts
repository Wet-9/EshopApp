import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductslayoutPageRoutingModule } from './productslayout-routing.module';

import { ProductslayoutPage } from './productslayout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductslayoutPageRoutingModule
  ],
  declarations: [ProductslayoutPage]
})
export class ProductslayoutPageModule {}
