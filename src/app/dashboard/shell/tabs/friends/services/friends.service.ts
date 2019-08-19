import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public friends: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor(
    private api: ApiService,
    private ws: WebsocketService,
    private user: UserService
  ) { 
    this.watchUsersFriends();
    this.ws.emit('friends', { id: this.user.id });
  }

  watchUsersFriends(){
    this.ws.on('friends').subscribe(data => {
      this.friends.next(data)
    })
  }

  getFriends(){
    return this.ws.on('friends');
  }

  getSuggestedFriends(id){
    // this will eventually get 
    return this.api.get('suggested-friends/'+id);
  }

  public addFriend(body){
    this.ws.emit('add-friend', body);
  }
}
