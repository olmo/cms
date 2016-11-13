import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../../auth.service';

@Component({
    moduleId: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    message: string;
    data: any = {};

    constructor(public authService: AuthService, public router: Router, private userService: UserService) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isAuthenticated() ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';

        this.authService.login(this.data).subscribe(res => {
            this.authService.setToken(res.token);
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}
