import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError } from "rxjs";
import { throwError } from 'rxjs';
import { User } from './user.model';
import { tap } from 'rxjs/operators'
import {  Router } from "@angular/router";
export interface AuthResponseData {
    kind: string;
    idToken:string;
    email:string;
    refreshTOken :string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}
@Injectable({
    providedIn:'root'
})
export class authService {
  private tokenExpirationTimer !:any;
  user = new BehaviorSubject<User | null >(null);
  user$: any;
    // token !:string |null ;

    constructor (private http:HttpClient,private router:Router){

    }
 signup(email :string ,password :string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmGSXtn0N9QNzHmt_uQENaMAX591sLoiA',{
        email: email,
        password:password,
        returnSecureToken:true
    }).pipe(catchError(this.handleError),tap(resData =>{
            this.handleAuthentication(resData.email,resData.localId,
                resData.idToken,+resData.expiresIn);
    }));
 }
 logIn(email:string,password:string){
    return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmGSXtn0N9QNzHmt_uQENaMAX591sLoiA',{
         email:email,
         password:password,
         returnSecureToken:true
     }).pipe(catchError(this.handleError),tap(resData =>{
        this.handleAuthentication(resData.email,resData.localId,
            resData.idToken,+resData.expiresIn);
}));
}
autoLogout(expirationDuration:number){
    this.tokenExpirationTimer=setTimeout(() => {
        this.logout();
    }, expirationDuration);
}
autoLogin(){
    const userData : {
        email:string;
        id:string;
        _token:string;
        _tokenExpirationDate:string;
    } =JSON.parse(localStorage.getItem('userData')!);
    if(!userData){
       return ;
    }
    const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate));

    if(loadedUser.token){
       this.user.next(loadedUser);
       const expirationDuration = new Date(userData._tokenExpirationDate).getTime()-new Date().getTime();
       this.autoLogout(expirationDuration);
    }
   
}
 private handleError(errorRes:HttpErrorResponse){
    let ErrorMsg = 'An Unknown Error Occured';
    if(!errorRes.error || !errorRes.error.error
    )
    {
        return throwError(ErrorMsg);

    }
    switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
            ErrorMsg = 'this email already exist';
            break;
        case 'EMAIL_NOT_FOUND':
            ErrorMsg = 'this Email doesn\'t exist.';
            break;
        case 'INVALID_PASSWORD':
            ErrorMsg = 'this password is not correct.';
            break;
        case 'USER_DISABLED':
            ErrorMsg = 'this is account has been deleted by admin';
            break;    
    }
    return throwError(ErrorMsg);


 }
 logout(){
    this.user.next(null);
    this.router.navigate(['./auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer=null;
}
 private handleAuthentication(email :string ,userId : string,token : string , expiresIn :number){

    const expireationDate = new Date(new Date().getTime()  + expiresIn *1000); 
    const user = new User(email,userId,token,expireationDate);
    this.user.next(user);
    this.autoLogout(expiresIn *1000);
    localStorage.setItem('userData',JSON.stringify(user));

 }
}