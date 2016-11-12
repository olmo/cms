import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BlogAdminListComponent }           from './blog-admin-list.component';
import { BlogAdminDetailComponent }  from './blog-admin-detail.component';
import { BlogAdminRoutingModule } from './blog-admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    BlogAdminRoutingModule
  ],
  declarations: [
    BlogAdminListComponent,
    BlogAdminDetailComponent,
  ],
  providers: [],
})
export class BlogAdminModule {}
