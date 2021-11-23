import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  closed : boolean;
  Current_Logged_User : any;
  ToggleButton = (document.getElementById("toggleLogo") as HTMLElement);
  myprofile : boolean;

  Router_ID = "profile";

  constructor(private router: Router, private route:ActivatedRoute) { 
    const USER = this.router.getCurrentNavigation()?.extras?.state;
    this.Current_Logged_User = USER;
    console.log(this.Current_Logged_User);
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
  }
  lightMode(event) {
    (document.getElementById("body_club") as HTMLElement)!.classList.remove("dark-mode");
  }

}
