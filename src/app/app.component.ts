import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './auth/auth.service';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:authService,
    private auth:AuthService,
    private  router:Router,
    private userService:UserService){
      auth.user$.subscribe(user =>{
        if(user)
        {
          userService.save(user);
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigate([returnUrl!]);
        }
      });

  }
  ngOnInit():void {
      this.authService.autoLogin();
  }
  
}
