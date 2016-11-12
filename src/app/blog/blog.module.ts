import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BlogListComponent }           from './blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    BlogRoutingModule
  ],
  declarations: [
    BlogListComponent,
  ],
  providers: [],
})
export class BlogModule {}
