import { PageDetailComponent } from './components/page-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesListComponent } from './components/pages-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PagesListComponent },
            { path: ':id', component: PageDetailComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
