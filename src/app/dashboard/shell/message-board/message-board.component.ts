import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'st-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  public display: string = 'friends';

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
