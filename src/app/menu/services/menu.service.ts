import { ApiService } from '../../services/api';
import {Injectable} from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MenuService {

    path: string = '/menu';
    constructor(private apiService: ApiService) {}

    getAll():Observable<any> {
        return this.apiService.get(this.path);
    }

    get(id: any):Observable<any> {
        return this.apiService.get(`${this.path}/${id}`);
    }

    add(values: any):Observable<any>{
        return this.apiService.post(`${this.path}`, values);
    }

    update(values: any):Observable<any> {
        return this.apiService.put(`${this.path}/${values.id}`, values);
    }

    delete(id: number):Observable<any> {
        return this.apiService.delete(`${this.path}/${id}`);
    }

}
