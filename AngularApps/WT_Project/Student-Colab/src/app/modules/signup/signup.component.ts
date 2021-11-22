import { Component, OnInit, ViewChild } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import axios from 'axios';
import * as $ from "jquery";
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
   
  constructor(){}
  done = false;
  no_clubs_selected = false;
  clubs = [{
  club_name : 'Chess_Club',
  id : 1
  },
  {
  club_name : 'Ethical Hacking Club',
  id : 2
  },
  {
  club_name : 'AI ML Club',
  id : 3
  },
  {
  club_name : 'No Clubs for now \uD83D\uDE05',
  id : 0
  }
  ]

 selectedClubs : any;

  ngOnInit(): void {
    this.selectedClubs = new Array<string>();
  }

  callDone(){
    if(this.selectedClubs.length>0 || this.no_clubs_selected===true){
      this.done = true;
      setTimeout(()=>{ 
        this.done = false; 
      }, 3000);
    }
  }

  addClubs(e:any, club_name:string, id:number){
      if (e.target.checked){
        this.selectedClubs.push(club_name);
        if(id===0){
          for(let i=1;i<4;i++){
            (document.querySelector("[id='"+i+"']") as HTMLInputElement)!.disabled = true;
            (document.querySelector("[id='"+i+"']") as HTMLInputElement)!.checked = false;
          }
          this.selectedClubs.length = 0;
          this.no_clubs_selected = true;
        }
      }else{
        this.selectedClubs = this.selectedClubs.filter(m=>m!=club_name);
        if(id===0){
          this.no_clubs_selected = false;
          for(let i=1;i<4;i++){
            (document.querySelector("[id='"+i+"']") as HTMLInputElement)!.disabled = false;
          }
        }
      }
      
  }
  
  //clubs = ['Chess_Club', 'Ethical Hacking Club', 'AI ML Club', 'No Clubs for now \uD83D\uDE05'];
  

  async handleRegistration(userobj){
    await axios.post('http://localhost:5000/submit-data', userobj)
                .then(response => {
                    console.log('POST: user is added', response);
                    console.log(response.data["iserror"])
                    if (response.data["iserror"]) {
                        this.popUp("#f44336","Error : Improper data","Invalid Email !","The email you entered is NOT valid", "Please enter a valid email and try again (check spelling mistakes). (eg: abc@xyz.com)")    
                    }
                    else{
                        this.popUp("#5cb85c", "Success","Congratulations "+userobj.fullname+" !!!","You have been successfully registered as a Club member in Student  Colab","Thank you for showing your interest in Club-Colab. Stay tuned for further updates.");
                        (document.querySelector("#new_user") as HTMLFormElement)!.reset();
                        (document.querySelector("#select_clubs") as HTMLFormElement)!.reset();
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
      phone : Phone,
      clubs : this.selectedClubs
    }

    console.log("This is User Object ----------> "+userobj);

    this.handleRegistration(userobj);


  }

  popUp(bgc,m1,m2,m3,m4){
    
    
    const modal = (document.querySelector("#myModal") as HTMLElement);
    
    const span = (document.querySelector("#close") as HTMLElement); 
    
    
    const modalbg = (document.querySelector("#modalH") as HTMLElement); 
    modalbg.style.backgroundColor = bgc;

    var modalif = (document.querySelector("#modalF") as HTMLElement); 
    modalif.style.backgroundColor = bgc;

    (document.querySelector("#popup1") as HTMLElement)!.innerText = m1;
    (document.querySelector("#popup2") as HTMLElement)!.innerText = m2;
    (document.querySelector("#popup3") as HTMLElement)!.innerText = m3;
    (document.querySelector("#popup4") as HTMLElement)!.innerText = m4;
    
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal!.style.display = "none";
        }
    }
    

}

}
