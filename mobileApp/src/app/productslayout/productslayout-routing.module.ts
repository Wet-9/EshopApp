import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductslayoutPage } from './productslayout.page';

const routes: Routes = [
  {
    path: '',
    component: ProductslayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductslayoutPageRoutingModule {}
