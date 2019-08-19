import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebsocketService } from 'src/app/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginId: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private ws: WebsocketService) { 
    this.loginId.subscribe(id => {
      if(id)
      {
        this.ws.emit('crops-feed', { id });
        this.ws.emit('user-crops', { id });
        this.ws.emit('friends', { id });
      }
    })
  }
}
