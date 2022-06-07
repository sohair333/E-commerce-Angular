import {  Product } from '../models';
export class ShoppingCartItems{

    // constructor(public product:Product,public quantity:number ){}

    key !: string;
    title !: string;
    imageUrl !: string;
    price!: number; 
    quantity!: number; 
  
    constructor(init?: Partial<ShoppingCartItems>) {
      Object.assign(this, init);
    }



    get totalPrice(){
        return this.price * this.quantity;
    }
}