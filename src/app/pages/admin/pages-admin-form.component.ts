import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'pages-admin-form',
    templateUrl: 'pages-admin-form.component.html'
})
export class PagesAdminFormComponent implements OnInit {
    public page:any = {};

    constructor(private af: AngularFire) { }

    ngOnInit() { }

    save(){
        const pages = this.af.database.list('/pages');
        pages.push(this.page);
    }
}