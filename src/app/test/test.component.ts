import { Component } from '@angular/core';
import { myservices } from '../mysevices';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
constructor(private myservice:myservices){

}
call(){
  this.myservice.toDo("getting the signal from the test")
}
}
