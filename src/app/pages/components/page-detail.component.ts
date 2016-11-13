import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageService } from '../services/page.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'page-detail',
    templateUrl: './page-detail.component.html'
})
export class PageDetailComponent implements OnInit {
    private page: any = {};
    constructor(private route: ActivatedRoute, private router: Router, private pageService: PageService) { }

    ngOnInit() {
        this.route.params
        .switchMap((params: Params) => this.pageService.get(params['id']))
        .subscribe(page => this.page = page);
    }
}