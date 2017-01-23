import { BlogAdminCategoriesComponent } from './components/admin/blog-admin-categories.component';
import { BlogAdminListComponent } from './components/admin/blog-admin-list.component';
import { BlogAdminFormComponent } from './components/admin/blog-admin-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BlogAdminListComponent },
            { path: 'add', component: BlogAdminFormComponent },
            { path: 'categories', component: BlogAdminCategoriesComponent },
            { path: ':id', component: BlogAdminFormComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BlogAdminRoutingModule { }
