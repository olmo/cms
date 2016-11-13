import { Observable } from 'rxjs/Rx';
import { PostService } from '../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-admin-list',
    templateUrl: './blog-admin-list.component.html'
})
export class BlogAdminListComponent implements OnInit {
    public posts: Array<any> = [];
    public columns = [
        { prop: 'title' },
        { name: 'user'}
    ];

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getAll().subscribe(res => {
            this.posts = res;
        });
     }
}