import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images1 = {1:["Magnus Carlsen", "FIDE Ranking : 1"], 2:["Fabiano Caruana", "FIDE Ranking : 2"], 3:["Ding Liren", "FIDE Ranking : :3"], 4:["Levon Aronian", "FIDE Ranking : :5"]};
  images2 = {5:["Vidit Gujrathi", "FIDE Ranking :22"], 6:["Anish Giri", "FIDE Ranking :7"], 7:["Alireja Firouza", "FIDE Ranking :9"], 8:["Vishwanathan Anand", "FIDE Ranking :16"]};
}
