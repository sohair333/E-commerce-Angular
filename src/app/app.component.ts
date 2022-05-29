import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './auth/auth.service';
import { AuthService } from './shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:authService,
    private auth:AuthService,
    private  router:Router){
      auth.user$.subscribe(user =>{
        if(user)
        {
          let returnUrl = localStorage.getItem('returnUrl');
          router.navigate([returnUrl!]);
        }
      });

  }
  ngOnInit():void {
      this.authService.autoLogin();
  }
  
}
