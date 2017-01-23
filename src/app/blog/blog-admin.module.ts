import { BlogAdminCategoriesComponent } from './components/admin/blog-admin-categories.component';
import { BlogAdminListComponent } from './components/admin/blog-admin-list.component';
import { BlogAdminFormComponent } from './components/admin/blog-admin-form.component';
import { CategoryService } from './services/category.service';
import { PostService } from './services/post.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BlogAdminRoutingModule } from './blog-admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    BlogAdminRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    BlogAdminListComponent,
    BlogAdminFormComponent,
    BlogAdminCategoriesComponent
  ],
  providers: [PostService, CategoryService],
})
export class BlogAdminModule {}
