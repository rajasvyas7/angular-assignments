import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {
  users: Users[];
  // @Output() onUserStatusChange = new EventEmitter<{id: number, status: string}>(); 
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.Users;
  }

  onChangeUserStatus(index:number, status:string) {
    this.userService.changeUserStatus(index, status);
  }


}
