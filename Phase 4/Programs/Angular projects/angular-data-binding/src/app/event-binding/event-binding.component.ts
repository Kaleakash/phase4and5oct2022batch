import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string ="Hi";
  result :string =""
  constructor() { }

  ngOnInit(): void {
  }

  fun() {
   // alert("Event generated...");
    this.msg="Hello";
  }

  passValue(nameRef:any){
    let name = nameRef.value;
    alert("Welcome user "+name);
  }

  add(n1:any,n2:any){
    let sum = eval(n1.value)+eval(n2.value);
    this.result="Sum of two number is "+sum;
    n1.value = "";
    n2.value = ""
  }
}
