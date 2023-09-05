import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryModalPage } from './category-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryModalPageRoutingModule {}
