import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import *  as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<firebase.default.User | null>;

  constructor(private angularFireAuth:AngularFireAuth,
    private route:ActivatedRoute,
    private router :Router
    ) {
    this.user$ = this.angularFireAuth.authState;
   }

  loginWithGoogleAccount(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.angularFireAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());


  }

  
}
