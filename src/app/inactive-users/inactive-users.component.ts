import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit {
  users: Users[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.Users;
  }

  onChangeUserStatus(index:number, status:string) {
    this.userService.changeUserStatus(index, status);
  }
}