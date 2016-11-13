import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesListComponent } from './pages-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PagesListComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PagesgRoutingModule { }
