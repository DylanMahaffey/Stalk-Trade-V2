import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Messages } from 'src/app/models/messanger.model';

import { UserService } from '../../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'st-display-groups',
  templateUrl: './display-groups.component.html',
  styleUrls: ['./display-groups.component.scss']
})
export class DisplayGroupsComponent implements OnInit {

  public messangers: Messages.Messanger[] = []
  private destroy$: Subject<boolean> = new Subject();

  constructor(public user: UserService, public messages: MessageService) { }

  ngOnInit() {
    this.messages.messangers.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.messangers = [];
      Object.values(data).forEach((m: any) => {
        if(m.type === "groups")
          this.messangers.push(m)
      })
    })
  }

  read(convo){

  }

  displayConversation(id: string){
    this.messages.open(id);
  }

  ngOnDestroy(){
    this.destroy$.next();
  }
}
