import { PageService } from '../../services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pages-admin-form',
    templateUrl: './pages-admin-form.component.html'
})
export class PagesAdminFormComponent implements OnInit {
    public page:any = {};

    constructor(private pageService : PageService) { }

    ngOnInit() { }

    save(){
        this.pageService.add(this.page).subscribe(res => {

        });
    }
}