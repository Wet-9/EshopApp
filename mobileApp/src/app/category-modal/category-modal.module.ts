import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryModalPageRoutingModule } from './category-modal-routing.module';

import { CategoryModalPage } from './category-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryModalPage]
})
export class CategoryModalPageModule {}
