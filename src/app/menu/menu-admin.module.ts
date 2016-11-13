import { MenuService } from './services/menu.service';
import { MenuAdminFormComponent } from './components/admin/menu-admin-form.component';
import { MenuAdminListComponent } from './components/admin/menu-admin-list.component';
import { MenuAdminRoutingModule } from './menu-admin-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    MenuAdminRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    MenuAdminListComponent,
    MenuAdminFormComponent
  ],
  providers: [MenuService],
})
export class MenuAdminModule {}
