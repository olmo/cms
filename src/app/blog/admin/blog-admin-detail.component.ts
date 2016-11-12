import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'blog-admin-detail',
    templateUrl: 'blog-admin-detail.component.html'
})
export class BlogAdminDetailComponent implements OnInit {
    public post:any = {};

    constructor(private af: AngularFire) { }

    ngOnInit() { }

    save(){
        const posts = this.af.database.list('/posts');
        posts.push(this.post);
    }
}