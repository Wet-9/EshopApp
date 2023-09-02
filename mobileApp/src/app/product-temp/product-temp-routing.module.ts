import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTempPage } from './product-temp.page';

const routes: Routes = [
  {
    path: '',
    component: ProductTempPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductTempPageRoutingModule {}
