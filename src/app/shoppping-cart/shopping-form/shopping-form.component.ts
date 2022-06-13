import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order';
import { ShoppingCart } from 'src/app/models/shopping-Cart';
import { AuthService } from 'src/app/shared/auth.service';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  @Input('cart') cart !: ShoppingCart;
  shipping :any = {}; 
  userSubscription !: Subscription;
  userId !: string;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user:any) => this.userId = user.uid);
  }

  ngOnDestroy() { 
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-sucess', result.key]);
  }  

}
