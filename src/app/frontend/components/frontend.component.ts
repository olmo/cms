import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'frontend',
    templateUrl: './frontend.component.html',
    styleUrls: ['./frontend.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FrontendComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        /*this.route.routeConfig.children.unshift({
            path: 'lazy',
            loadChildren: 'app/lazy.module#LazyModule'
        });*/

        /*this.pageService.getAll().subscribe(res => {
            for(let page of res){
                this.route.routeConfig.children.unshift({
                    path: page.path,
                    component: PageDetailComponent
                });
            }
        });*/
    }
}