import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public id: string = localStorage.getItem('userId');
  public user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private ws: WebsocketService, 
    private api: ApiService
    ) {
      // this.ws.emit('init', { id: this.id })
    this.ws.on('update-user').subscribe(data => {
      this.user.next(data);
    })
  }

  getUser(id){
    return this.api.get('user-by-id/'+id);
  }
}
