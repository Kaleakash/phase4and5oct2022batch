import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string=""
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  loginDetails:Array<Login>=[];
  constructor(public router:Router) { } // DI for Router API 
   ngOnInit(): void {
    let login1 = new Login("raj@gmail.com","123");
    let login2 = new Login("ajay@gmail.com","456");
    let login3 = new Login("vijay@gmail.com","789");
    let login4 = new Login("dinesh@gmail.com","246");
    this.loginDetails.push(login1);
    this.loginDetails.push(login2);
    this.loginDetails.push(login3);
    this.loginDetails.push(login4);
  }
  checkDetails() {
    let login = this.loginRef.value;
    let result = this.loginDetails.find(l=>l.emailid==login.emailid && l.password==login.password);
    if(result==undefined){
      this.msg = "Failure try once again";
    }else {
      sessionStorage.setItem("user",result.emailid);
      this.router.navigate(["home"],{skipLocationChange:true}); 
    }
    this.loginRef.reset();
  }
}
