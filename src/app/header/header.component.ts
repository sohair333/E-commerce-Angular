import { Component, OnInit , OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';
import *  as firebase from 'firebase/compat/app';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  user$ !:Observable<firebase.default.User | null>;
  private userSub !: Subscription;
  isAuthenticate = false;
  constructor(private authSerivce:authService,
    
    public auth:AuthService
    ) { 
      
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
 
  ngOnDestroy(){
    this.userSub.unsubscribe();
    
  }

}
