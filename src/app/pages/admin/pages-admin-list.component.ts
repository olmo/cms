import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'pages-admin-list',
    templateUrl: 'pages-admin-list.component.html'
})
export class PagesAdminListComponent implements OnInit {
    public pages: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) { }

    ngOnInit() {
        this.pages = this.af.database.list('/pages');
     }
}