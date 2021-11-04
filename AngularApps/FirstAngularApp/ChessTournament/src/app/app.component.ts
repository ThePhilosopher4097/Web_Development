import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'ChessTournament';

  constructor(private ser:RegisterService) { }
  ngOnInit():void{
  }

  users = [];
  isShow:boolean = false;
  
  getRegisteredUsers(){
    this.ser.registeredUsers().subscribe(data => this.users=data);
    this.isShow = !this.isShow;
  } 
}

