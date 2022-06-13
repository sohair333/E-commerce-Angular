import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-Cart';
import { AuthService } from '../shared/auth.service';
import { OrderService } from '../shared/order.service';
import { ShoppingCartService } from '../shared/shopppingCart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart!: ShoppingCart;
  subscribtion!: Subscription;
  userID!: string;
  userSubscribtopn!: Subscription;
  cartSubscription!: Subscription;
  constructor(
    private router: Router,
    private shoppingCartServise: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  async placeOrder() {
    let ORder = new Order(this.userID, this.shipping, this.cart);

    let result = await this.orderService.storeOrder(ORder);
    this.router.navigate(['/order-success', result.key]);
  }
  async ngOnInit() {
    let cart$ = await this.shoppingCartServise.getCart();
    this.cartSubscription = cart$.subscribe((cart) => {
      this.cart = cart;
    });
    this.userSubscribtopn=this.authService.user$.subscribe(
      (user: any) => (this.userID = user.userid)
    );
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscribtopn.unsubscribe();
  }
}
