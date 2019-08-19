import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../services/explore.service';
import { Crop } from 'src/app/models/crop.model';

@Component({
  selector: 'st-crops-feed',
  templateUrl: './crops-feed.component.html',
  styleUrls: ['./crops-feed.component.scss']
})
export class CropsFeedComponent implements OnInit {

  public crops: Crop[] = [];

  constructor(private exploreService: ExploreService) { }

  ngOnInit() {
    this.exploreService.crops.subscribe(data => {
      this.crops = [];
      this.crops = Object.values(data)
    })
  }

}
