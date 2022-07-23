import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { authService } from '../auth/auth.service';
import * as firebase from 'firebase/compat/app';
import { AuthService } from '../shared/auth.service';
import { ShoppingCartService } from '../shared/shopppingCart.service';
import { Prodt } from '../models';
import { ShoppingCart } from '../models/shopping-Cart';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  Cart$!: Observable<ShoppingCart>;
  shoppingCartItemCount!: number;
  user$!: Observable<firebase.default.User | null>;
  private userSub!: Subscription;
  // isChecked:boolean = false;
  isAuthenticate = false;
  // mode:string='';
  constructor(
    private authSerivce: authService,
    private shoppingCartService: ShoppingCartService,
    public auth: AuthService
  ) {}
 
  onAuthenticateMode() {
    this.isAuthenticate = !this.isAuthenticate;
  }
  onLogout() {
    this.authSerivce.logout();
  }

  async ngOnInit() {
    this.userSub = this.authSerivce.user.subscribe((user) => {
      this.isAuthenticate = !!user;
      console.log(!user);
      console.log(!!user);
    });

    this.Cart$ = await this.shoppingCartService.getCart();
  }
 

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  
  
}
