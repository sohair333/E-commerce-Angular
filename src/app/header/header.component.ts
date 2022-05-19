import { Component, OnInit ,Output , EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';

// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  private userSub !: Subscription;
  isAuthenticate = false;
  constructor(private authSerivce:authService) { }
 
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
