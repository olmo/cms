import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'blog-admin-form',
    templateUrl: 'blog-admin-form.component.html'
})
export class BlogAdminFormComponent implements OnInit {
    public post:any = {};

    constructor(private af: AngularFire) { }

    ngOnInit() { }

    save(){
        const posts = this.af.database.list('/posts');
        posts.push(this.post);
    }
}