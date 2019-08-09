import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public id: string;
  public user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private ws: WebsocketService, private api: ApiService) {
    this.ws.on('update-user').subscribe(data => {
      console.log(data);
      
      this.user.next(data);
    })
  }

  getUser(id){
    return this.api.get('user-by-id/'+id);
  }
}
