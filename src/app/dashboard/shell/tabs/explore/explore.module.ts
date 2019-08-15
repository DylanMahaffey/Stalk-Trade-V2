import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { CropsFeedComponent } from './crops-feed/crops-feed.component';
import { FriendsFeedComponent } from './friends-feed/friends-feed.component';
import { SearchFeedComponent } from './search-feed/search-feed.component';
import { ExploreShellComponent } from './explore-shell/explore-shell.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CropsFeedComponent, FriendsFeedComponent, SearchFeedComponent, ExploreShellComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    FormsModule
  ]
})
export class ExploreModule { }
