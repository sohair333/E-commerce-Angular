// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';

// import { AuthService } from './auth.service';
// import { UserService } from './user.service';
// import 'rxjs/add/operators/switchMap';
// import { switchMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminAuthGuardService implements CanActivate {

//   constructor(private auth:AuthService,
//     private userService:UserService) { }

//   canActivate(){
//     this.auth.user$
//     .switchMap(
//       (user:any )=> {
//         return this.userService.get(user.uid);
        
//       }).subscribe(
//       (x:any )=>
//       console.log(x));
    
//   }
// }
