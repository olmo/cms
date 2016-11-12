import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/blog/blog.module#BlogModule'
      },
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}