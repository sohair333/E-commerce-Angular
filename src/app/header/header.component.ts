import { Component, OnInit ,Output , EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';
import *  as firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  user !:firebase.default.User | null;
  private userSub !: Subscription;
  isAuthenticate = false;
  constructor(private authSerivce:authService,
    private afAuth:AngularFireAuth) { 
      this.afAuth.authState.subscribe( user => this.user = user );
    }
 
  onAuthenticateMode(){
    this.isAuthenticate = !this.isAuthenticate;
  }
  onLogout(){
    this.authSerivce.logout();
  }

  ngOnInit(): void {
    this.userSub=this.authSerivce.user.subscribe(
      user =>{
        this.isAuthenticate = !!user;
        console.log(!user);
        console.log(!!user);
      }
    );
  }
  // onSelect(feature :string){

    
  //   this.featuredSelected.emit(feature);

  // }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
