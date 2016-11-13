import { MenuAdminFormComponent } from './components/admin/menu-admin-form.component';
import { MenuAdminListComponent } from './components/admin/menu-admin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: MenuAdminListComponent },
            { path: 'add', component: MenuAdminFormComponent },
            { path: ':id', component: MenuAdminFormComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MenuAdminRoutingModule { }
