import { MenuService } from '../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-header',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public menu;
    public items;
    public left;
    public width;

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.get(1).subscribe(res => {
            this.menu = res;
            this.items = JSON.parse(res.content);

            this.mover();
        });

        
    }

    mover(){
        let selected = document.querySelector(".selected");
        let nav = document.querySelector('.nav').getBoundingClientRect();
        if(selected){
            selected.classList.add('active');
            this.left = selected.getBoundingClientRect().left - nav.left;
            this.width = selected.clientWidth;
        }
        else{
            let first = document.querySelector(".nav>ul>li");
            first.classList.add('active');
            this.left = first.getBoundingClientRect().left - nav.left;
            this.width = first.clientWidth;
        }
    }


    over(ev){
        if(ev.target.localName=='a'){
            document.querySelector(".nav ul li").classList.remove('active');
            ev.target.parentElement.classList.add('active');
            let nav = document.querySelector('.nav').getBoundingClientRect();
            this.left = ev.target.parentElement.getBoundingClientRect().left - nav.left;
            this.width = ev.target.parentElement.clientWidth;
        }
    }

    out(ev){
        if(ev.target.localName=='a'){
            this.mover();
        }
    }
}
