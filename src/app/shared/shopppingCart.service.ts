import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { pro } from "../models";
import { take } from 'rxjs';
@Injectable()
export class ShoppingCartService{
    constructor(private afDB:AngularFireDatabase){}

   private create(){
      return  this.afDB.list('/shopping-cart').push({
            dataCreated : new Date().getTime()

        });
    }

   private getCart(cartId:string){
    return this.afDB.list('/shopping-cart'+cartId);
   }

   private async getOrCreateCart(){
        let CartID = localStorage.getItem('cartId');
        if(CartID) return CartID;
        
        let res:any = await this.create();
        localStorage.setItem('cartId',res.key);
        return  res.key;
       
       
    }
   async addToCart(product:pro){
        let cartId = await this.getOrCreateCart();
       let Quantity =this.afDB.object('/shopping-cart/'+cartId + '/items/' + product.key);
       Quantity.value.subscribe((item:any) =>{
        if(item.exists()){
            item.update({quantity : item.quantity + 1 });
        }
        else{
            item.set({ product :product , quantity :1  });
        }
       });


        

    }
}