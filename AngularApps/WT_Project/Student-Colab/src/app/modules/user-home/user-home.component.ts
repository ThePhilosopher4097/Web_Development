import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closed : boolean;
  public Current_Logged_User : any;
  ToggleButton = (document.getElementById("toggleLogo") as HTMLElement);
  myprofile : boolean;

  Router_ID = "profile";


  constructor(private router: Router, private route:ActivatedRoute) { 
    const USER = this.router.getCurrentNavigation()?.extras?.state;
    this.Current_Logged_User = USER;
    console.log(this.Current_Logged_User);
    if(this.Current_Logged_User[0].length<=0){
      this.router.navigate(['/']);
    }
    this.closed = false;
    this.myprofile = true;
  }

  ngOnInit(): void {
  }

  clearHistory(){    
    var backlen = history.length;
    history.go(-backlen);
    window.location.href = 'http://localhost:4200/';

  }

  public openCloseNav(event){
    if(this.closed){
      (document.getElementById("mySidebar") as HTMLElement)!.style.width = "300px";
      (document.getElementById("toggleLogo") as HTMLElement)!.style.left = "0px";
      (document.getElementById("clubs") as HTMLElement)!.style.left = "300px";
      (document.getElementById("sideNavContent") as HTMLElement)!.style.display = "visible";
      this.closed = false;
    }
    else{
      (document.getElementById("mySidebar") as HTMLElement)!.style.width = "50px";
      (document.getElementById("toggleLogo") as HTMLElement)!.style.left = "-250px";
      (document.getElementById("clubs") as HTMLElement)!.style.left = "0px";
      (document.getElementById("sideNavContent") as HTMLElement)!.style.display = "hidden";
      this.closed = true;
    }
  }

  showProfile(event){
    (document.getElementById("profile") as HTMLElement)!.hidden = false;
    (document.getElementById("ustore") as HTMLElement)!.hidden = true;
    (document.getElementById("clubs") as HTMLElement)!.hidden = true;
    (document.getElementById("search") as HTMLElement)!.hidden = true;
    (document.getElementById("todo") as HTMLElement)!.hidden = true;
  }

  showTodo(event){
    
    (document.getElementById("todo") as HTMLElement)!.hidden = false;
    (document.getElementById("ustore") as HTMLElement)!.hidden = true;
    (document.getElementById("clubs") as HTMLElement)!.hidden = true;
    (document.getElementById("search") as HTMLElement)!.hidden = true;
    (document.getElementById("profile") as HTMLElement)!.hidden = true;
    window.location.href = 'http://localhost:4300'; //go to To-Do-App
  }
  showClubs(event){
    
    (document.getElementById("clubs") as HTMLElement)!.hidden = false;
    (document.getElementById("profile") as HTMLElement)!.hidden = true;
    (document.getElementById("search") as HTMLElement)!.hidden = true;
    (document.getElementById("ustore") as HTMLElement)!.hidden = true;
    (document.getElementById("todo") as HTMLElement)!.hidden = true;
  }
  showUstore(event){
   
    (document.getElementById("ustore") as HTMLElement)!.hidden = false;
    (document.getElementById("profile") as HTMLElement)!.hidden = true;
    (document.getElementById("clubs") as HTMLElement)!.hidden = true;
    (document.getElementById("todo") as HTMLElement)!.hidden = true;
    (document.getElementById("search") as HTMLElement)!.hidden = true;
  }
  showSearch(event){
    
    (document.getElementById("search") as HTMLElement)!.hidden = false;
    (document.getElementById("profile") as HTMLElement)!.hidden = true;
    (document.getElementById("ustore") as HTMLElement)!.hidden = true;
    (document.getElementById("clubs") as HTMLElement)!.hidden = true;
    (document.getElementById("todo") as HTMLElement)!.hidden = true;
  }


  darkMode(event) {
    (document.getElementById("body_club") as HTMLElement)!.classList.add("dark-mode");
    (document.getElementById("parag") as HTMLElement)!.style.color = "#a19e9d";
    (document.getElementById("helper") as HTMLElement)!.style.color = "#a19e9d";
    (document.getElementById("mySidebar") as HTMLElement)!.style.backgroundColor = "#151515";
  }
  lightMode(event) {
    (document.getElementById("body_club") as HTMLElement)!.classList.remove("dark-mode");
    (document.getElementById("parag") as HTMLElement)!.style.color = "rgb(58, 57, 57)";
    (document.getElementById("helper") as HTMLElement)!.style.color = "rgb(58, 57, 57)";
    (document.getElementById("mySidebar") as HTMLElement)!.style.backgroundColor = "#5bc995";
  }

}
