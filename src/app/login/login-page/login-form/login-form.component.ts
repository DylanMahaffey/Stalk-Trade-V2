import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'st-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  err: string = '';
  loggingIn = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.verify.subscribe(data => {
      if(data.success)
      this.err = '';
    else
      this.err = 'Username/Password is Incorrect';
      
    })
  }

  logIn(){
    this.authService.logIn(this.loggingIn);
  }
}
