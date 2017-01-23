import { Observable } from 'rxjs/Rx';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog.scss']
})
export class BlogListComponent implements OnInit {
    public posts: Observable<any[]>;

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.posts = this.postService.getAll();
    }
}