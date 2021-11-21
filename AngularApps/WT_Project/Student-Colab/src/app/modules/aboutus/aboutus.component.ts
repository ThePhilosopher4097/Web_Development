import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images1 = {0:["Sameer Patil", "Fullstack Developer"], 1:["Atharva Joshi", "Leader-Scrum Master"], 2:["Abhijeet Gandhi", "AL ML Expert"], 3:["Swaraj Kurapati", "Front End Developer"]};
}
