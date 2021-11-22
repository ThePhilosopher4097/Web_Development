import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  title = 'Student-Colab';

  clicked : boolean = true;


  typewriter_display: string = "";
  text: string[] = ['Welcome to Student Colab....', 'The all in one place to work together', 'Manage Clubs comprehensively...'];
  counter:number = 0; 
  index_counter:number = 0;
  ngOnInit() {
    
    this.typingCallback(this);
    
  }
  typingCallback(that) {
    let total_length = that.text[that.index_counter].length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.text[that.index_counter][current_length];
      setTimeout(that.typingCallback, 150, that);
    } else {
      that.typewriter_display = "";
      that.index_counter++;
      if(that.index_counter == 3) {that.index_counter = 0;}
    }
    //this.counter++;
    
    setInterval(this.typingCallback, 4000, this);
    
  }
  
  hide_title(){
    this.clicked = false;
   }

   
   imageObject: Array<object> = [
      {
        image: 'assets/home/Home-background.png',
          thumbImage: 'assets/home/Home-background.png',
          alt: 'bgimg_1',
      },
      {
        image: 'assets/home/bgimg_6.webp',
          thumbImage: 'assets/home/bgimg_6.webp',
          alt: 'bgimg_6',
      },
      {
        image: 'assets/home/bgimg_7.webp',
          thumbImage: 'assets/home/bgimg_7.webp',
          alt: 'bgimg_7',
      },
      {
        image: 'assets/home/bgimg_11.jpg',
          thumbImage: 'assets/home/bgimg_11.jpg',
          alt: 'bgimg_11',
      },
      {
        image: 'assets/home/bgimg_12.jpg',
          thumbImage: 'assets/home/bgimg_12.jpg',
          alt: 'bgimg_12',
      },
      {
        image: 'assets/home/bgimg_13.jpg',
          thumbImage: 'assets/home/bgimg_13.jpg',
          alt: 'bgimg_13',
      },
      {
        image: 'assets/home/bgimg_14.jpg',
          thumbImage: 'assets/home/bgimg_14.jpg',
          alt: 'bgimg_14',
      }
      
    ];

    
}
