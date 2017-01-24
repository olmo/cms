import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';

@Component({
    selector: 'blog-admin-form',
    templateUrl: './blog-admin-form.component.html'
})
export class BlogAdminFormComponent implements OnInit {
    public post:any = {};
    public categories = [];
    private quill;

    constructor(private postService: PostService, private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if(id){
            this.postService.get(id).subscribe(res => {
                this.post = res;

                // setTimeout(() => {
                //     this.initWysiwyg();
                // }, 100);
            });
        }
        else{
            // this.initWysiwyg();
        }
        
        this.categoryService.getAll().subscribe(res => {
            this.categories = res;
        });
        
    }

    initWysiwyg(){
        let Block = Quill.import('blots/block');

        /*class BlockquoteBlot extends Block {
            blotName = 'blockquote';
            tagName = 'blockquote';
         }*/

        this.quill = new Quill('#editor', {
            theme: 'snow'
        });
    }

    save(){
        //this.post.content = this.quill.container.firstChild.innerHTML;

        if('id' in this.post){
            this.postService.update(this.post).subscribe(res => {
                
            });
        }
        else{
            this.postService.add(this.post).subscribe(res => {
                
            });
        }
    }
}