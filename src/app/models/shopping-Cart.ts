
import { ShoppingCartItems } from "./shopppingCart-items";

export class ShoppingCart{
   
    constructor(public  items:ShoppingCartItems[]){}
    get totalItemCount(){
        let Count =0;
        for(let ProductId in this.items){
            Count += this.items[ProductId].quantity;
        }
        return Count;
    }
}