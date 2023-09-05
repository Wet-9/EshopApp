import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCategoryModalPageRoutingModule } from './edit-category-modal-routing.module';

import { EditCategoryModalPage } from './edit-category-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCategoryModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditCategoryModalPage]
})
export class EditCategoryModalPageModule {}
