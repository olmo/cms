import { FrontendComponent } from './components/frontend.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { BlogModule } from '../blog/blog.module';
import { MaterialModule } from '@angular/material';
import { FrontendRoutingModule } from './frontend-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FrontendRoutingModule,
        HeaderModule
    ],
    exports: [],
    declarations: [FrontendComponent],
    providers: [],
})
export class FrontendModule { }
