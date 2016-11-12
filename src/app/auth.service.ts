import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private user: any;
    isLoggedIn: boolean = false;
    redirectUrl: string;

    constructor(private af: AngularFire) { }

    setUser(user) { 
        this.user = user; 
    }

    getAuthenticated(): Observable<any> { 
        return this.af.auth; 
    }

    login() {
        this.af.auth.login();
    }

    logout(): void {
        this.af.auth.logout();
        this.isLoggedIn = false;
    }
}