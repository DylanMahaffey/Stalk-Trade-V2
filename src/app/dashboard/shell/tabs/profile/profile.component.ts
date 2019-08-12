import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'st-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User = new User('','','','');

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      if(user)
        this.user = user;
    })
  }

  public starCount(stars){
    let rating
    stars.forEach(r => {
      if(!rating)
        rating = r;

      rating = (rating + r) / 2;
    });
    return Math.round(rating);
  }
}
