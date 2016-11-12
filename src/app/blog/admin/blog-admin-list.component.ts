import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'blog-admin-list',
    templateUrl: 'blog-admin-list.component.html'
})
export class BlogAdminListComponent implements OnInit {
    public posts: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) { }

    ngOnInit() {
        this.posts = this.af.database.list('/posts');
     }
}