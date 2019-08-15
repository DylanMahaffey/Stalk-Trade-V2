import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'st-explore-shell',
  templateUrl: './explore-shell.component.html',
  styleUrls: ['./explore-shell.component.scss']
})
export class ExploreShellComponent implements OnInit {

  public searchText: string = '';

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log(this.searchText);
    
  }
}
