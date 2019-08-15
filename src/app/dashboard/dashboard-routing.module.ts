import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './shell/tabs/home/home.component';
import { TradeManagerComponent } from './shell/tabs/trade-manager/trade-manager.component';
import { ProfileComponent } from './shell/tabs/profile/profile.component';
import { FriendsComponent } from './shell/tabs/friends/friends.component';
import { NotificationsComponent } from './shell/tabs/notifications/notifications.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'trade-manager', component: TradeManagerComponent },
    { path: 'crop-manager', loadChildren: './shell/tabs/crop-manager/crop-manager.module#CropManagerModule' },
    { path: 'profile', component: ProfileComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'notifications', component: NotificationsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
