import { PostService } from '../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-detail',
    templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
    public post: any = {};

    constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
        .switchMap((params: Params) => this.postService.get(+params['id']))
        .subscribe(post => this.post = post);
    }
}