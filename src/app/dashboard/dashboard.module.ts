import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShellComponent } from './shell/shell.component';
import { NavComponent } from './shell/nav/nav.component';
import { MessageBoardComponent } from './shell/message-board/message-board.component';
import { DisplayFriendsComponent } from './shell/message-board/display-friends/display-friends.component';
import { DisplayGroupsComponent } from './shell/message-board/display-groups/display-groups.component';
import { DisplayTradesComponent } from './shell/message-board/display-trades/display-trades.component';
import { MessangerComponent } from './shell/message-board/messanger/messanger.component';
import { NotificationsComponent } from './shell/tabs/notifications/notifications.component';
import { FriendsComponent } from './shell/tabs/friends/friends.component';
import { ProfileComponent } from './shell/tabs/profile/profile.component';
import { CropManagerComponent } from './shell/tabs/crop-manager/crop-manager.component';
import { TradeManagerComponent } from './shell/tabs/trade-manager/trade-manager.component';
import { HomeComponent } from './shell/tabs/home/home.component';

@NgModule({
  declarations: [ShellComponent, NavComponent, MessageBoardComponent, DisplayFriendsComponent, DisplayGroupsComponent, DisplayTradesComponent, MessangerComponent, NotificationsComponent, FriendsComponent, ProfileComponent, CropManagerComponent, TradeManagerComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
