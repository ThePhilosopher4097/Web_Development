import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-clubs',
  templateUrl: './user-clubs.component.html',
  styleUrls: ['./user-clubs.component.css']
})
export class UserClubsComponent implements OnInit {

  showClubs = true;

  constructor() { 
    this.showClubs = true;
  }

  ngOnInit(): void {
    this.showClubs = true;
  }

  hideClubs(event){
    if (this.showClubs)
      this.showClubs = false;
    else
      this.showClubs = true;
  }

}
