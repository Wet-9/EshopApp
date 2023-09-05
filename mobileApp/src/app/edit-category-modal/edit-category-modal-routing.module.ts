import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCategoryModalPage } from './edit-category-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditCategoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCategoryModalPageRoutingModule {}
