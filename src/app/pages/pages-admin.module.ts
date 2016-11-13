import { PageService } from './services/page.service';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PagesAdminListComponent }           from './components/admin/pages-admin-list.component';
import { PagesAdminFormComponent }  from './components/admin/pages-admin-form.component';
import { PagesAdminRoutingModule } from './pages-admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    PagesAdminRoutingModule
  ],
  declarations: [
    PagesAdminListComponent,
    PagesAdminFormComponent,
  ],
  providers: [PageService],
})
export class PagesAdminModule {}
