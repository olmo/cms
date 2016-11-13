import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogAdminListComponent } from './blog-admin-list.component';
import { BlogAdminFormComponent } from './blog-admin-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BlogAdminListComponent },
            { path: 'add', component: BlogAdminFormComponent },
            { path: ':id', component: BlogAdminFormComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BlogAdminRoutingModule { }
