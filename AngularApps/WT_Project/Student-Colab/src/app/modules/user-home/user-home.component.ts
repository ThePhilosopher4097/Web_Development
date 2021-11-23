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


  constructor(private router: Router, private route:ActivatedRoute) { 
    const USER = this.router.getCurrentNavigation()?.extras?.state;
    this.Current_Logged_User = USER;
    console.log(this.Current_Logged_User);
    this.closed = false;
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
      (document.getElementById("sideNavContent") as HTMLElement)!.style.display = "visible";
      this.closed = false;
    }
    else{
      (document.getElementById("mySidebar") as HTMLElement)!.style.width = "0px";
      (document.getElementById("toggleLogo") as HTMLElement)!.style.left = "-300px";
      (document.getElementById("sideNavContent") as HTMLElement)!.style.display = "hidden";
      this.closed = true;
    }
  }

}
