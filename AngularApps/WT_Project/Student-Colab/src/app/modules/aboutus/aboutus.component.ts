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
  images1 = {0:["Sameer Patil", "Fullstack Developer", "https://github.com/ThePhilosopher4097?tab=repositories", "https://www.linkedin.com/in/sameer-patil-16022316b/"], 1:["Atharva Joshi", "Leader-Scrum Master", "https://github.com/atharvajoshi1007", "https://www.linkedin.com/in/aj-matics/"], 2:["Abhijeet Gandhi", "AL ML Expert", "https://github.com/AbhijeetGandhi","https://www.linkedin.com/in/abhijeet--gandhi/"], 3:["Swaraj Kurapati", "Front End Developer"]};
}
