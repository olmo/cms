import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
