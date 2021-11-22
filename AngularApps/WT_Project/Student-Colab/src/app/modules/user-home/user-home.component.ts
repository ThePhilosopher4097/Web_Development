import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  Current_Logged_User : any;
  constructor(private router: Router, private route:ActivatedRoute) { 
    const USER = this.router.getCurrentNavigation()?.extras?.state;
    this.Current_Logged_User = USER;
    console.log(this.Current_Logged_User);
  }

  ngOnInit(): void {
  }



}
