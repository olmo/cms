import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
      },
      {
        path: '',
        loadChildren: 'app/frontend/frontend.module#FrontendModule'
      },
      
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}