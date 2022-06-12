import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afDB:AngularFireDatabase) { }

  storeOrder(order:any){
   return this.afDB.list('/my/orders').push(order);
  }
}
