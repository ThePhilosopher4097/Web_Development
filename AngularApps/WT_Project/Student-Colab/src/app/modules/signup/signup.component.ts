import { Component, OnInit, ViewChild } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import axios from 'axios';
 
export interface Cartoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  
 constructor(){}

  ngOnInit(): void {
  }

  
  
  clubs = ['Chess_Club', 'Ethical Hacking Club', 'AI ML Club'];
  @ViewChild('club_name') input;
  
  async handleRegistration(userobj){
    await axios.post('http://localhost:5000/submit-data', userobj)
                .then(response => {
                    console.log('POST: user is added', response);
                    console.log(response.data["iserror"])
                    if (response.data["iserror"]) {
                        this.popUp("#f44336","Error : Improper data","Invalid Email !","The email you entered is NOT valid", "Please enter a valid email and try again (check spelling mistakes). (eg: abc@xyz.com)")    
                    }
                    else{
                        this.popUp("#5cb85c", "Success","Congratulations "+userobj.fullname+" !!!","You have been successfully registered as a Club member in Student  Colab","Thank you for showing your interest in Club-Colab. Stay tuned for further updates.")
                    }
                }).catch(error => console.error(error));
  }

  registerUser(event) {
    
    const Fullname = (document.querySelector("#fullname") as HTMLInputElement).value;
    const Email = (document.querySelector("#email") as HTMLInputElement).value;
    const Phone = (document.querySelector("#phone") as HTMLInputElement).value;
    const Gender = (document.querySelector("input[name='gender']:checked") as HTMLInputElement).value;
    const Bio = (document.querySelector("#bio") as HTMLInputElement).value;
    const Password = (document.querySelector("#password") as HTMLInputElement).value;

    console.log(Fullname);
    //event.preventDefault()
    const target = event.target
    const target2 = (event.target as HTMLInputElement);
    console.log("In the register Function ------------------->"+event,"\n------->"+target2);
    
    var userobj = {
      fullname : Fullname,
      email : Email,
      gender : Gender,
      bio : Bio,
      password : Password,
      phone : Phone
    }

    console.log("This is User Object ----------> "+userobj);

    this.handleRegistration(userobj);


  }

  popUp(bgc,m1,m2,m3,m4){
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0] as HTMLElement; 
    
    
    var modalbg = document.getElementById("modalH");
    modalbg!.style.backgroundColor = bgc;

    var modalif = document.getElementById("modalF");
    modalif!.style.backgroundColor = bgc;

    (document.getElementById("popup1"))!.innerText=m1
    (document.getElementById("popup2"))!.innerText=m2
    (document.getElementById("popup3"))!.innerText=m3
    (document.getElementById("popup4"))!.innerText=m4
    
    modal!.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span!.onclick = function() {
        modal!.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal!.style.display = "none";
        }
    }
    

}

}
