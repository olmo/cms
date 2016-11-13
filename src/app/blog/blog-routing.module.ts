import { BlogDetailComponent } from './components/blog-detail.component';
import { BlogListComponent } from './components/blog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: BlogListComponent },
            { path: ':id', component: BlogDetailComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { }
