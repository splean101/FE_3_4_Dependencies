import { Component } from '@angular/core';
import { UserGroupService } from '../service/user-group.service.ts'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(public UserGroupService: UserGroupService){}
 newGroupName = '';
 groupNameEdit() {
    this.UserGroupService.groupName = this.newGroupName;
    this.newGroupName = '';
  }
}
