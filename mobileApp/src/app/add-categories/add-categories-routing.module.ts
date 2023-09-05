import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCategoriesPage } from './add-categories.page';

const routes: Routes = [
  {
    path: '',
    component: AddCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCategoriesPageRoutingModule {}
