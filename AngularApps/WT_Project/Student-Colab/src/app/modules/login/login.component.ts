import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { showerror : false;}

  ngOnInit(): void {
  }
  showerror = false;
  spam_counter = 0;
  async handleLogin(userobj){
    await axios.post('http://localhost:5000/user-login', userobj)
                .then(response => {
                    console.log('POST: user is added', response);
                    console.log(response.data["iserror"])
                    const User = response.data.userdata
                    console.log(User)
                    if (response.data["iserror"]) {
                      console.log("Login Failed");
                      this.spam_counter++;
                      this.showerror = true;
                      setTimeout(()=>{ 
                        this.showerror = false; 
                      }, 3000);
                    }
                    else{
                        (document.querySelector("#loginForm") as HTMLFormElement)!.reset();
                        console.log(User);
                        this.router.navigate(['/user-home'], {state : User});
                        //redirect here 
                    }
                }).catch(error => console.error(error));
  }

  loginUser(event) {
    
    const Email = (document.querySelector("#login") as HTMLInputElement).value;
    const Password = (document.querySelector("#password") as HTMLInputElement).value;
    var userobj = {
      username : Email,
      password : Password
    }
    this.handleLogin(userobj);
  }
  
}
