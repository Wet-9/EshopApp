import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProductsPageRoutingModule } from './admin-products-routing.module';

import { AdminProductsPage } from './admin-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProductsPageRoutingModule
  ],
  declarations: [AdminProductsPage]
})
export class AdminProductsPageModule {}
