import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'users-admin-form',
    templateUrl: './users-admin-form.component.html'
})
export class UserAdminFormComponent implements OnInit {
    public page:any = {};

    constructor(private userService : UserService) { }

    ngOnInit() { }

    save(){
        this.userService.add(this.page).subscribe(res => {

        });
    }
}