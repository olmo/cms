import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent }           from './admin.component';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { BlogAdminListComponent } from '../blog/admin/blog-admin-list.component';
import { BlogAdminDetailComponent } from '../blog/admin/blog-admin-detail.component';
import { AuthGuard } from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            children: [
              { path: '', component: AdminDashboardComponent },
              { path: 'blog', loadChildren: 'app/blog/admin/blog-admin.module#BlogAdminModule' }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
