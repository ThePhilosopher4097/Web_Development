import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private HT:HttpClient) { }

  registeredUsers():Observable<any>{
    return this.HT.get("https://jsonplaceholder.typicode.com/users");
  }
}
