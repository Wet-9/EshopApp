import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductsPage } from './add-products.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductsPageRoutingModule {}
