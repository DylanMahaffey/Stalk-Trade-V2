import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Messages } from 'src/app/models/messanger.model';
import { UserService } from '../../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'st-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.scss']
})
export class MessangerComponent implements OnInit, OnDestroy {

  @Input() id: string;
  public convo: Messages.Messanger;
  @Output() read: boolean;
  public message: Messages.Message = new Messages.Message(0,this.user.user.value.firstName,this.user.user.value.id,"")

  constructor(
    public user: UserService, 
    private messages: MessageService
  ) { }

  ngOnInit() {
      this.convo = this.messages.messangers.value[this.id]
  }

  closeConversation(){
    this.messages.close(this.convo.id);
  }

  post(){
    this.messages.postMessage(this.message, this.convo.id)
  }

  ngOnDestroy(){
  }
}

