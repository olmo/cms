import { ApiService } from '../../services/api';
import {Injectable} from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PageService {

    path: string = '/page';
    constructor(private apiService: ApiService) {}

    getAll():Observable<any> {
        return this.apiService.get(this.path);
    }

    get(id: any):Observable<any> {
        return this.apiService.get(`${this.path}/${id}`);
    }

    add(linea: any):Observable<any>{
        return this.apiService.post(`${this.path}`, linea);
    }

    update(linea: any):Observable<any> {
        return this.apiService.put(`${this.path}/${linea.id}`, linea);
    }

    delete(id: number):Observable<any> {
        return this.apiService.delete(`${this.path}/${id}`);
    }

}
