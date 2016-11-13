import { UserAdminFormComponent } from './components/admin/users-admin-form.component';
import { UsersAdminListComponent } from './components/admin/users-admin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UsersAdminListComponent },
            { path: 'add', component: UserAdminFormComponent },
            { path: ':id', component: UserAdminFormComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UsersAdminRoutingModule { }
