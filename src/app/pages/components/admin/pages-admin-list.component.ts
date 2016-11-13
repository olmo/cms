import { PageService } from '../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pages-admin-list',
    templateUrl: './pages-admin-list.component.html'
})
export class PagesAdminListComponent implements OnInit {
    public pages: Array<any> = [];

    constructor(private pageService: PageService) { }

    ngOnInit() {
        this.pageService.getAll().subscribe(res => {
            this.pages = res;
        });
     }
}