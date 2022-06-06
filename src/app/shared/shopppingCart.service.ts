import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { pro, Prodt } from '../models';
import { take } from 'rxjs';
@Injectable()
export class ShoppingCartService {
  constructor(private afDB: AngularFireDatabase) {}

  private create() {
    return this.afDB.list('/shopping-cart').push({
      dataCreated: new Date().getTime()
    });
  }

   async getCart() {
     let cartId = await  this.getOrCreateCartID();
    return this.afDB.object('/shopping-cart/' + cartId);
  }
  private getItem(cartId: string, productId: string) {
    return this.afDB
      .object('/shopping-cart/' + cartId + '/items/' + productId);
  }
  private async getOrCreateCartID()  :Promise <string>{
    let CartID = localStorage.getItem('cartId');
    if (CartID) return CartID;
   
    let res: any = await this.create();
    localStorage.setItem('cartId', res.key );
    return res.key;

  }
  async addToCart(product: pro) {
    let cartId = await this.getOrCreateCartID();
    const item$ = this.getItem(cartId,product.key);

    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
       
          item$.update({product:product ,quantity: (item.payload.val().quantity || 0) + 1 });
        
      });
  }
}