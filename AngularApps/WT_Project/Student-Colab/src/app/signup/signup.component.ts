import { Component, OnInit, ViewChild } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  
}
