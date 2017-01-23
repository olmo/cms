import { ApiService } from './services/api';
import { UserService } from './users/services/user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    private token: string = null;
    redirectUrl: string;
    private group: string;

    constructor(private apiService: ApiService, private userService: UserService) { }

    login(datos: any):Observable<any>{
        return this.apiService.post('/login', datos);
    }

    logout(): void {
        this.setToken(null);
    }

    setToken(token) { 
        this.token = token;
        this.apiService.setHeaders({Authorization: 'Bearer ' + this.token});

        if(token){
            localStorage.setItem("token", token);
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            let tokenInfo = JSON.parse(window.atob(base64));

            let user = {id: tokenInfo.id, email: tokenInfo.email, group: tokenInfo.group};
            this.group = user.group;
        }
        else{
            localStorage.removeItem("token");
        }
    }

    isAuthenticated(): boolean { 
        return this.token != null ? true : false; 
    }

    getGroup(): string {
        return this.group;
    }
    
}