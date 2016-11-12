import { Component }        from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { AuthService }      from '../auth.service';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router, private af: AngularFire) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.af.auth.login();

    /*this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });*/
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
