import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-Cart';
import { OrderService } from '../shared/order.service';
import { ShoppingCartService } from '../shared/shopppingCart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit ,OnDestroy{
  // shipping !={};
  shipping={};
  cart !:ShoppingCart;
  subscribtion !:Subscription;

  constructor(private shoppingCartServise:ShoppingCartService,
    private orderService:OrderService){}

  placehorder(){
    let order = {
      dataPlaced : new Date().getTime(),
      shipping: this.shipping,
      items:this.cart.items.map( i => {
        return {
          product :{
            title :i.title,
            imageUrl:i.imageUrl,
            price:i.price
          },
          quantity:i.quantity,
          totalPrice:i.totalPrice
        }
      })
    };
    this.orderService.storeOrder(order);
  }
  async ngOnInit(){
    let cart$ = await this.shoppingCartServise.getCart();
    this.subscribtion=cart$.subscribe(
      (cart) =>{
        this.cart = cart;
      }
    )
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
