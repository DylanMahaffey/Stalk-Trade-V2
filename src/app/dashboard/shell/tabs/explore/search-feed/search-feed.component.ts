import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'st-search-feed',
  templateUrl: './search-feed.component.html',
  styleUrls: ['./search-feed.component.scss']
})
export class SearchFeedComponent implements OnInit {

  public search: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(data => {
      this.search = data.get('search');
    })
  }

}
