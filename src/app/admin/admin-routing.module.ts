import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminComponent } from './components/admin.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

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
              { path: 'blog', loadChildren: 'app/blog/blog-admin.module#BlogAdminModule' },
              { path: 'pages', loadChildren: 'app/pages/pages-admin.module#PagesAdminModule' },
              { path: 'users', loadChildren: 'app/users/users-admin.module#UsersAdminModule' },
              { path: 'menu', loadChildren: 'app/menu/menu-admin.module#MenuAdminModule' }
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
