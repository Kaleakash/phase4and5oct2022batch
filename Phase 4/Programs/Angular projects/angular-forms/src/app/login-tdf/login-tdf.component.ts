import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CustomService } from '../custom.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-tdf',
  templateUrl: './login-tdf.component.html',
  styleUrls: ['./login-tdf.component.css']
})
export class LoginTdfComponent implements OnInit {
  msg:string =""
  constructor(public ls:LoginService) { }   // DI using constructor Base. 
  ngOnInit(): void {
  }
  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    //console.log(login);
    // if(login.emailid=="raj@gmail.com" && login.password=="123"){
    //     this.msg = "successfully login";
    // }else {
    //     this.msg = "failure try once again";
    // }
    //let cs = new CustomService();
    //this.msg = cs.checkUserDetails(login);
    this.msg = this.ls.checkUserDetails(login);
    loginRef.reset();
  }
}
