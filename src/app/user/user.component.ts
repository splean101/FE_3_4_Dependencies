import { Component, Input } from '@angular/core';
import { UsersService } from '../service/users.service';
import { UserGroupService } from '../service/user-group.service.ts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(public UserGroupService: UserGroupService, public UsersService: UsersService){}
  newGroupName = '';
  newName = '';
  newStatus = '';
  groupNameEdit() {
     this.UserGroupService.groupName = this.newGroupName;
     this.newGroupName = '';
   }

   nameEdit() {
    this.UsersService.users[this.id].name = this.newName; 
    this.newName = '';
  }

  statusEdit() {
    this.UsersService.users[this.id].status = this.newStatus;
    this.newStatus = '';
  }

  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  @Input() id = 0


}
