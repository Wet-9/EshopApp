import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProductModalPage } from './edit-product-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditProductModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProductModalPageRoutingModule {}
