import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageService } from './services/page.service';
import { HtmlOutlet } from './components/html-outlet';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageDetailComponent } from './components/page-detail.component';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PagesListComponent } from './components/pages-list.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    PagesRoutingModule
  ],
  declarations: [
    PagesListComponent,
    PageDetailComponent,
    PageTitleComponent,
    HtmlOutlet
  ],
  providers: [PageService],
})
export class PagesModule {}
