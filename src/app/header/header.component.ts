import { Component, OnInit , OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';
import *  as firebase from 'firebase/compat/app';
import { AuthService } from '../shared/auth.service';
import { ShoppingCartService } from '../shared/shopppingCart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {
  shoppingCartItemCount !:number;
  user$ !:Observable<firebase.default.User | null>;
  private userSub !: Subscription;
  isAuthenticate = false;
   constructor(private authSerivce:authService,
   private shoppingCartService:ShoppingCartService,
    public auth:AuthService
    ) { 
      
      
    }

  onAuthenticateMode(){
    this.isAuthenticate = !this.isAuthenticate;
  }
  onLogout(){
    this.authSerivce.logout();
  }

 async ngOnInit() {
    this.userSub=this.authSerivce.user.subscribe(
      user =>{
        this.isAuthenticate = !!user;
        console.log(!user);
        console.log(!!user);
      }
    );

    let cart$ =await this.shoppingCartService.getCart();
    cart$.valueChanges().subscribe(
      cart =>{
        this.shoppingCartItemCount =0;
        for(let ProductId in cart?.items){
          this.shoppingCartItemCount +=cart?.items[ProductId].quantity;
        }
      }
    );

  }
 
  ngOnDestroy(){
    this.userSub.unsubscribe();
    
  }

}
