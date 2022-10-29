import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    checkUserDetails(login:any):string {
        if(login.emailid=="raj@gmail.com" && login.password=="123"){
            return "successfully login";
        }else {
            return "failure try once again";
        }
    }
}