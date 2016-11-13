import { MenuService } from '../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-admin-list',
    templateUrl: './menu-admin-list.component.html'
})
export class MenuAdminListComponent implements OnInit {
    public menus: Array<any> = [];
    public columns = [
        { prop: 'title' }
    ];

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getAll().subscribe(res => {
            this.menus = res;
        });
     }
}