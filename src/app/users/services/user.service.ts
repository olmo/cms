import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {

    path: string = '/usuario';
    constructor(private apiService: ApiService) {}

    update(usuario: any):Observable<any> {
        return this.apiService.put(`${this.path}/${usuario.id}`, usuario);
    }

    add(datos: any):Observable<any>{
        return this.apiService.post(this.path, datos);
    }

    getAll():Observable<any>{
        return this.apiService.get(this.path);
    }

    delete(id: number):Observable<any> {
        return this.apiService.delete(`${this.path}/${id}`);
    }

    get(id: number):Observable<any>{
        return this.apiService.get(`${this.path}/${id}`);
    }
}
