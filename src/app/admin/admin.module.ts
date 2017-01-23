import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminComponent } from './components/admin.component';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
  ]
})
export class AdminModule {}
