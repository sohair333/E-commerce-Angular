
import { ShoppingCartItems } from "./shopppingCart-items";

export class ShoppingCart{
   
    constructor(public  items:ShoppingCartItems[] |any ){}

    get productIDS() {
      return  Object.keys(this.items);
    }
    get totalItemCount(){
        let Count =0;
        for(let ProductId in this.items){
            Count += this.items[ProductId].quantity;
        }
        return Count;
    }
}