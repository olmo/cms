import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesAdminListComponent } from './pages-admin-list.component';
import { PagesAdminFormComponent } from './pages-admin-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: PagesAdminListComponent },
            { path: 'add', component: PagesAdminFormComponent },
            { path: ':id', component: PagesAdminFormComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PagesAdminRoutingModule { }
