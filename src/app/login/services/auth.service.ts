import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UserService } from 'src/app/dashboard/shell/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public verify: BehaviorSubject<any> = new BehaviorSubject({success: true});

  constructor(
    private ws: WebsocketService, 
    private router: Router, 
    private user: UserService
    ) { 
    this.ws.on('login').subscribe(data => {
      this.verify.next(data)

      if(data.success){
        localStorage.setItem('userId', data.id);
        this.user.id = data.id;

        this.ws.emit('init', { id: data.id })
        this.router.navigate(['dashboard']);
      }
    })
  }

  public logIn(credentials){
    this.ws.emit('login', credentials);
  }

  public logOut(){
    localStorage.clear();
    this.router.navigate(['']);

    this.ws.emit('logout', {})
  }
}
