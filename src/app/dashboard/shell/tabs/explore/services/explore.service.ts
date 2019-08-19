import { Injectable } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { Crop } from 'src/app/models/crop.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  public crops: BehaviorSubject<object> = new BehaviorSubject({});
  public friendsCrops: BehaviorSubject<object> = new BehaviorSubject({});

  constructor(
    private user: UserService,
    private ws: WebsocketService
  ) { 
    this.watchCrops();
    this.ws.emit('crops-feed', { id: this.user.id });
  }

  watchCrops(){
    this.ws.on('crops-feed').subscribe(data => {
      console.log(data);
      
      this.crops.next(data);      
    })
    
    this.ws.on('friends-crops').subscribe(data => {
      this.friendsCrops.next(data);
    })
  }
}
