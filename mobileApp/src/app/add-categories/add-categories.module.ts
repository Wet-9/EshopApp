import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCategoriesPageRoutingModule } from './add-categories-routing.module';

import { AddCategoriesPage } from './add-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCategoriesPageRoutingModule
  ],
  declarations: [AddCategoriesPage]
})
export class AddCategoriesPageModule {}
