import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';

import { UsersService } from './service/users.service';
import { UserGroupService } from './service/user-group.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  public users = this.UserService.users;
  constructor(
    public UserService: UsersService,
    public UserGroupService: UserGroupService
  ) {}

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);

    this.componentRef.instance.members = this.users.length;
    this.componentRef.instance.name = this.UserGroupService.groupName;

    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
