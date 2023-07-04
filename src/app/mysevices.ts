import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class myservices {

 constructor(){

 }

 toDo(string:any){
    console.log(string);
 }
}
