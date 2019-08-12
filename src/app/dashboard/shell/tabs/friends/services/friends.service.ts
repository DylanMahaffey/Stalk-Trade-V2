import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UserService } from '../../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private api: ApiService,
    private ws: WebsocketService,
    private user: UserService
    ) { 
      this.ws.emit('friends', { id: this.user.id })
    }

  getFriends(){
    return this.ws.on('friends');
  }

  getSuggestedFriends(id){
    // this will eventually get 
    return this.api.get('suggested-friends/'+id);
  }

  public addFriend(body){
    this.ws.emit('add-friend', body)
  }
}
