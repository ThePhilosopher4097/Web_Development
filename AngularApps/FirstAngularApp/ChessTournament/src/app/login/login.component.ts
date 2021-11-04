import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  username:string;
  password:number;

  login (){
    if (this.username == "sameer" && this.password==123){
      alert('login Successful !');
      this.router.navigateByUrl('/about-us');
    }
    else{
      alert('Wrong credentials ! Try again');
    }
  }
}
