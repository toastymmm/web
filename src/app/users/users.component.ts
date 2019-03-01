import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {

  }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }
}
