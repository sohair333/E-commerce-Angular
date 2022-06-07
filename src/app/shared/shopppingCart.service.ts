import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { pro, Prodt } from '../models';
import { take , map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { ShoppingCart } from '../models/shopping-Cart';

@Injectable()
export class ShoppingCartService {
  constructor(private afDB: AngularFireDatabase) {}

  private create() {
    return this.afDB.list('/shopping-cart').push({
      dataCreated: new Date().getTime()
    });
  }

   async getCart() :Promise<Observable <ShoppingCart>> {
     let cartId = await  this.getOrCreateCartID();
    return this.afDB.object('/shopping-cart/' + cartId).valueChanges().pipe(
      map(
        (x:any) =>
          new ShoppingCart(x.items)
        
  
      )
    )
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
    this.updateItemQuantity(product,1);
    
  }
 async removeFromCart(product:pro){
   this.updateItemQuantity(product,-1);

  }
  private  async  updateItemQuantity(product:pro,change:number){

    let cartId = await this.getOrCreateCartID();
    const item$ = this.getItem(cartId,product.key);

    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
       
          item$.update({
            // product:product 
            title:product.title,
            imageUrl:product.imageUrl,
            price:product.price
            ,quantity: (item.payload.val().quantity || 0) + change });
        
      });
    
  }
  
}
