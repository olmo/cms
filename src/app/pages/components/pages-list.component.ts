import { PageService } from '../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pages-list',
    templateUrl: './pages-list.component.html'
})
export class PagesListComponent implements OnInit {
    public pages = [];

    constructor(private pageService: PageService) { }

    ngOnInit() {
        this.pageService.getAll().subscribe(res => {
            this.pages = res;
        });
    }
}