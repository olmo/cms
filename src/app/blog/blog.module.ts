import { BlogListComponent } from './components/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail.component';
import { CategoryService } from './services/category.service';
import { PostService } from './services/post.service';
import { SafeHtml } from '../shared/safe-html.pipe';
import { CarouselModule } from '../carousel/carousel.module';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    BlogRoutingModule,
    CarouselModule
  ],
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
    SafeHtml
  ],
  providers: [PostService, CategoryService],
  exports: [BlogListComponent]
})
export class BlogModule {}
