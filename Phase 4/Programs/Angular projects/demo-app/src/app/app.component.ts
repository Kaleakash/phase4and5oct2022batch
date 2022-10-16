import { Component } from '@angular/core';

@Component({
  selector: 'app-root',       // <app-root></app-root>  
  templateUrl: './app.component.html',      // connect to html page 
  styleUrls: ['./app.component.css'],      // connect to css page 
  
})

export class AppComponent {
  id:number =123;
  name:string ="Raj Deep";
  result :boolean = true;
}
