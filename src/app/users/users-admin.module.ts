import { UsersAdminRoutingModule } from './users-admin-routing.module';
import { UsersAdminListComponent } from './components/admin/users-admin-list.component';
import { UserAdminFormComponent } from './components/admin/users-admin-form.component';
import { UserService } from './services/user.service';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    UsersAdminRoutingModule
  ],
  declarations: [
    UsersAdminListComponent,
    UserAdminFormComponent,
  ],
  providers: [UserService],
})
export class UsersAdminModule {}
