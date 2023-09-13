import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNavbarPage } from './admin-navbar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNavbarPage,
    children: [
      {
        path: 'orders',
        loadChildren: () => import('../all-orders/all-orders.module').then(m => m.AllOrdersPageModule)
      },
      {
        path: 'addcategories',
        loadChildren: () => import('../add-categories/add-categories.module').then(m => m.AddCategoriesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'settings', 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNavbarPageRoutingModule {}
