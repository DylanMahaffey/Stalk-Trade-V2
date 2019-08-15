import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreShellComponent } from './explore-shell/explore-shell.component';
import { CropsFeedComponent } from './crops-feed/crops-feed.component';
import { FriendsFeedComponent } from './friends-feed/friends-feed.component';
import { SearchFeedComponent } from './search-feed/search-feed.component';

const routes: Routes = [
  { path: '', component: ExploreShellComponent, children: [
    { path: '', component: CropsFeedComponent },
    { path: 'friends', component: FriendsFeedComponent },
    { path: 'search', component: SearchFeedComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
