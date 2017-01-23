import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'users-admin-list',
    templateUrl: './users-admin-list.component.html'
})
export class UsersAdminListComponent implements OnInit {
    public users: Array<any> = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().subscribe(res => {
            this.users = res;
        });
     }
}