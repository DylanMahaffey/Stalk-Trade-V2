import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public verify: BehaviorSubject<any> = new BehaviorSubject({success: true});

  constructor(private api: ApiService, private ws: WebsocketService, private router: Router) { }

  public logIn(credentials){
    this.api.post('login', credentials).pipe(take(1)).subscribe((data: any) => {
      this.verify.next(data)

      if(data.success){
        this.ws.emit('init', { id: data.id })
        this.router.navigate(['dashboard']);
      }
    })
  }

  public logOut(){
    localStorage.clear();
    this.router.navigate(['']);
    location.reload();

    this.ws.emit('logout', {})
  }
}
