import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNavbarPageRoutingModule } from './admin-navbar-routing.module';

import { AdminNavbarPage } from './admin-navbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNavbarPageRoutingModule
  ],
  declarations: [AdminNavbarPage]
})
export class AdminNavbarPageModule {}
