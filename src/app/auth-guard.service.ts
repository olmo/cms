import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let url: string = state.url;

        return this.checkLogin(url);

        /*return this.authService.getAuthenticated().take(1).map(user => {
              this.authService.setUser(user);
              return user ? true : false;
        });*/
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Observable<boolean> {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> {
        /*if (this.authService.isLoggedIn) { 
            return true; 
        }

        this.authService.login();

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        return false;*/

        return this.authService.getAuthenticated().take(1).map(auth => {
              if(auth == null){
                  this.authService.login();
                  return false;
              }
              else
                return true;
        });
    }
}