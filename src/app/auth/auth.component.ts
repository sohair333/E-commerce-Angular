import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthResponseData, authService } from "./auth.service";


import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthService } from "../shared/auth.service";


@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class  AuthComponent{
  
   
    isLoginMode= true;
    isLoading = false;
    error !:string  | null ;
    constructor(private authService:authService,private router : Router,
    private angularFireAuth:AuthService){
        
    }
    onSwitchMode(){
        this.isLoginMode=!this.isLoginMode;
        

    }
    
    onSubmit(form :NgForm){
        // console.log(form.value);
        if(!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        let AuthObs :Observable<AuthResponseData>;
        this.isLoading = true;
        if(this.isLoginMode){
           AuthObs = this.authService.logIn(email,password);
        }  
        else{
           AuthObs= this.authService.signup(email, password);

        }  
        
        AuthObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading= false;
                this.router.navigate(['./home']);
               
              },
              ErrorMsg => {
                console.log(ErrorMsg);
               
                this.error = ErrorMsg;
                this.isLoading=false;
                
              }
            );

        form.reset();
    }
    onHandleError(){
      this.error=null;
  }
  loginGoogle(){
  
  this.angularFireAuth.loginWithGoogleAccount();
  

   
  }
 
}