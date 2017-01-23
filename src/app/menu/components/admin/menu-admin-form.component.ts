import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-admin-form',
    templateUrl: './menu-admin-form.component.html'
})
export class MenuAdminFormComponent implements OnInit {
    public menu:any = {};

    constructor(private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if(id){
            this.menuService.get(id).subscribe(res => {
                this.menu = res;
            });
        }
        
    }

    save(){

        if('id' in this.menu){
            this.menuService.update(this.menu).subscribe(res => {
                
            });
        }
        else{
            this.menuService.add(this.menu).subscribe(res => {
                
            });
        }
    }
}