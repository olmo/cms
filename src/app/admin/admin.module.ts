import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';

import { AdminRoutingModule }       from './admin-routing.module';
import { BlogAdminModule } from '../blog/admin/blog-admin.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule.forRoot(),
    BlogAdminModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
  ]
})
export class AdminModule {}
