import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'pages-list',
    templateUrl: 'pages-list.component.html'
})
export class PagesListComponent implements OnInit {
    public pages: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) { }

    ngOnInit() {
        this.pages = this.af.database.list('/pages');
    }
}