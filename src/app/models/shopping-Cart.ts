
import { ShoppingCartItems } from "./shopppingCart-items";

export class ShoppingCart{
    items :ShoppingCartItems[] = [];
    constructor(public  itemsMap:{[productId:string]:ShoppingCartItems}){
        for(let productId in itemsMap)
        {
            this.items.push(itemsMap[productId]);
        }  
      }

    
    get totalItemCount(){
        let Count =0;
        for(let ProductId in this.items){
            Count += this.items[ProductId].quantity;
        }
        return Count;
    }
}