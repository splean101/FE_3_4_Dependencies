import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  public groupName = 'Healthy lifestyle';

  public editGroupName(newName: string) {
    this.groupName = newName;
  }
}