import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'st-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(
    private userService: UserService,
    private ws: WebsocketService
    ) { }

  ngOnInit() {
    this.ws.emit('init', { id: this.userService.id })
  }

}
