import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';


import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UserService } from '../../services/user.service';
import { Messages } from 'src/app/models/messanger.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public openMessages: string[] = [];

  public messangers: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private api: ApiService,
    private ws: WebsocketService,
    private user: UserService
  ) { 
    this.WsListener();
  }

  private WsListener(){
    this.api.get('user-messangers/'+this.user.id)
    .pipe(take(1))
    .subscribe(data => {
      this.messangers.next(data);
    })

    this.ws.on('new-messanger').subscribe(data => {
      let messangers = this.messangers.value;
      messangers[data.id] = data

      this.ws.emit('join-room', { id: data.id })
      this.messangers.next(messangers);
    })

    this.ws.on('new-message').subscribe(data => {
      this.messangers.value[data.messangerId].messages.push(data.message)
    })

    this.ws.on('update-messanger').subscribe(data => {
      let messangers = this.messangers.value;
      messangers[data.id].members[this.user.id].unread = data.members[this.user.id].unread

      this.openMessages.forEach(mid => {
        this.read(mid);
      })
    })
  }

  getMessangerName(members){
    const user: any = Object.values(members).find((m: any) => { return  m.id !== this.user.id })
     return user.username;
  }
  
  read(mid: string){
    this.messangers.value[mid].members[this.user.id].unread = 0;
    this.ws.emit('read-messanger',{ messangerId: mid, user: this.user.id });
  }

  postMessage(message: Messages.Message, convoId: number){
    this.ws.emit('add-message', { messangerId: convoId, message: message })
  }

  open(mid){
    if(this.openMessages.filter((id: any) => {
      return(id===mid)}).length===0
    )
    this.read(mid);
    this.openMessages.push(mid);
    this.updateOpen();
  }

  close(id: number){
    this.openMessages = this.openMessages.filter((convo: any) => {
      return (convo !==id)
    })
    this.updateOpen();
  }

  private updateOpen(){
    localStorage.setItem('openMessages', JSON.stringify(this.openMessages))
  }
}
