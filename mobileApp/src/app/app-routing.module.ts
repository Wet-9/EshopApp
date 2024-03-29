import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductTempPage } from './product-temp/product-temp.page';

const routes: Routes = [
  {path: '', redirectTo: 'tabs/home', pathMatch:'full'},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'product-temp',
    loadChildren: () => import('./product-temp/product-temp.module').then( m => m.ProductTempPageModule)
  },
  { path: 'product-temp/:id', component: ProductTempPage },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-temp/:id',
    loadChildren: () => import('./product-temp/product-temp.module').then( m => m.ProductTempPageModule)
  },
  {
    path: 'productslayout',
    loadChildren: () => import('./productslayout/productslayout.module').then( m => m.ProductslayoutPageModule)
  },
  {
    path: 'productslayout/:id',
    loadChildren: () => import('./productslayout/productslayout.module').then(m => m.ProductslayoutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-products',
    loadChildren: () => import('./admin-products/admin-products.module').then( m => m.AdminProductsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  
  },
  {
    path: 'add-products',
    loadChildren: () => import('./add-products/add-products.module').then( m => m.AddProductsPageModule)
  },
  {
    path: 'add-categories',
    loadChildren: () => import('./add-categories/add-categories.module').then( m => m.AddCategoriesPageModule)
  },
  {
    path: 'category-modal',
    loadChildren: () => import('./category-modal/category-modal.module').then( m => m.CategoryModalPageModule)
  },
  {
    path: 'edit-category',
    loadChildren: () => import('./edit-category/edit-category.module').then( m => m.EditCategoryPageModule)
  },
  {
    path: 'edit-category/:id',
    loadChildren: () => import('./edit-category/edit-category.module').then( m => m.EditCategoryPageModule)
  },
  {
    path: 'product-modal',
    loadChildren: () => import('./product-modal/product-modal.module').then( m => m.ProductModalPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'nadmin',
    loadChildren: () => import('./admin-navbar/admin-navbar.module').then( m => m.AdminNavbarPageModule)
  },
  {
    path: 'edit-category-modal',
    loadChildren: () => import('./edit-category-modal/edit-category-modal.module').then( m => m.EditCategoryModalPageModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./billing/billing.module').then( m => m.BillingPageModule)
  },
  {
    path: 'all-orders',
    loadChildren: () => import('./all-orders/all-orders.module').then( m => m.AllOrdersPageModule)
  },
  {
    path: 'edit-product-modal',
    loadChildren: () => import('./edit-product-modal/edit-product-modal.module').then( m => m.EditProductModalPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'edit-product/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
