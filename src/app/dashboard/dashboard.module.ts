import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NavComponent } from './shell/nav/nav.component';
import { MessageBoardComponent } from './shell/message-board/message-board.component';
import { DisplayFriendsComponent } from './shell/message-board/display-friends/display-friends.component';
import { DisplayGroupsComponent } from './shell/message-board/display-groups/display-groups.component';
import { DisplayTradesComponent } from './shell/message-board/display-trades/display-trades.component';
import { MessangerComponent } from './shell/message-board/messanger/messanger.component';

@NgModule({
  declarations: [ShellComponent, NavComponent, MessageBoardComponent, DisplayFriendsComponent, DisplayGroupsComponent, DisplayTradesComponent, MessangerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
