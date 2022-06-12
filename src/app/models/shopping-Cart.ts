
import { pro } from "../models";
import { ShoppingCartItems } from "./shopppingCart-items";

export class ShoppingCart{
    items:ShoppingCartItems[]=[] ;
    
    constructor(private itemsMap: { [productId: string]: ShoppingCartItems }) {
        this.itemsMap = itemsMap || {} ;
        for (let productId in itemsMap) {
          let item = itemsMap[productId];
          this.items.push(new ShoppingCartItems({ ...item, key: productId }));
        }
      }


    getQuantity(product:pro){
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }  

    get totalPrice(){
        let sum = 0;
        for(let prodtID in this.items){
            sum += this.items[prodtID].totalPrice;
        }
        return sum;
    }
    get totalItemCount(){
        let Count =0;
        for(let ProductId in this.items){
            Count += this.items[ProductId].quantity;
        }
        return Count;
    }
}