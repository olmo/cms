import { FrontendComponent } from './components/frontend.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FrontendComponent,
        children: [
          {
            path: '',
            children: [
              { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
              { path: 'users', loadChildren: 'app/users/users.module#UsersModule' },
              { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
              { path: '', redirectTo: '/pages/inicio', pathMatch: 'full' },
            ]
          },
          /*{ path: '', loadChildren: 'app/blog/blog.module#BlogModule' },
          { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' }*/
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FrontendRoutingModule {}
