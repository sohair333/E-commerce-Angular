
import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable, tap ,take} from "rxjs";

import { authService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private Authservice:authService,private router :Router){}
    canActivate(route :ActivatedRouteSnapshot,router :RouterStateSnapshot):boolean |Promise<boolean>|Observable<boolean>{

       return this.Authservice.user.pipe(
        take(1),   
        map(
           user =>{
               return !!user;
           }
       ),tap( 
        isAuth =>{
         if(!isAuth){
            this.router.navigate(['/auth'], { queryParams: {returnUrl : state.arguments}});
            
         }
       
       }));
    }

}