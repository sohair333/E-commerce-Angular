import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Order } from '../models/order';
import { ShoppingCartService } from './shopppingCart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afDB:AngularFireDatabase,private shoppingCartService: ShoppingCartService) { }

 async PlaceOrder(Order: unknown){
   let res= await this.afDB.list('/my-orders').push(2);
  this.shoppingCartService.clearCart();
   return res;
  }

  async placeOrder(order:any) {
    let result = await this.afDB.list('/my-orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.afDB.list('/my-orders');
  }
  
}
