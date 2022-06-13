import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ShoppingCartService } from './shopppingCart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afDB:AngularFireDatabase,private shoppingCartService: ShoppingCartService) { }

  storeOrder(order:any){
   return this.afDB.list('/my/orders').push(order);
  }

  async placeOrder(order:any) {
    let result = await this.afDB.list('/my/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.afDB.list('/my/orders');
  }
  
}
