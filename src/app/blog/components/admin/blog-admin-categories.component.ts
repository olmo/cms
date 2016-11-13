import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blog-admin-categories',
    templateUrl: './blog-admin-categories.component.html'
})
export class BlogAdminCategoriesComponent implements OnInit {
    public categories = [];
    public columns = [
        { prop: 'name' },
    ];
    public editing = {};
    public category = {};

    constructor(private categoryService: CategoryService) { }

    ngOnInit() { 
        this.categoryService.getAll().subscribe(res => {
            this.categories = res;
        });
    }

    updateValue(event, cell, cellValue, row) {
        this.categories[row.$$index][cell] = event.target.value;
        this.categoryService.update(this.categories[row.$$index]).subscribe(res => {
            this.editing[row.$$index + '-' + cell] = false;
        });
    }

    save(){
        this.categoryService.add(this.category).subscribe(res => {
            this.category = {};
            this.categories.push(res);
        });
    }
}