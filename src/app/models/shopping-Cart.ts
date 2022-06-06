
import { ShoppingCartItems } from "./shopppingCart-items";

export class ShoppingCart{
    items :ShoppingCartItems[] = [];
    constructor(public  itemsMap:{[productId:string]:ShoppingCartItems}){
        for(let productId in itemsMap)
        {
            let item =itemsMap[productId];
            this.items.push(new ShoppingCartItems(item.product,item.quantity));
        }  
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