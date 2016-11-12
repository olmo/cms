import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogAdminListComponent } from './blog-admin-list.component';
import { BlogAdminDetailComponent } from './blog-admin-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BlogAdminListComponent },
            { path: 'add', component: BlogAdminDetailComponent },
            { path: ':id', component: BlogAdminDetailComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BlogAdminRoutingModule { }
