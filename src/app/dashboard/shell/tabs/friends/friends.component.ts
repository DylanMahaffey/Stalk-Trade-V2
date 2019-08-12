import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs/operators';
import { FriendsService } from './services/friends.service';

@Component({
  selector: 'st-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  public search: User[] = [];
  public friends: User[] = [];
  public suggestedUsers: User[] = [];
  public groups = [];

  constructor(private usersService: UserService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendsService.getFriends().subscribe((data: any) => {
      console.log(data);
      
      this.friends = data;
    })
    this.friendsService.getSuggestedFriends(this.usersService.id).pipe(take(1)).subscribe((data: any) => {
      this.suggestedUsers = data;
    })
  }

  addFriend(friendId){
    this.friendsService.addFriend({id: this.usersService.id, friendId})
  }
}
