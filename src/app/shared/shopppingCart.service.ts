import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable()
export class ShoppingCartService{
    constructor(private afDB:AngularFireDatabase){}
    
    create(){
      return  this.afDB.list('/shopping-cart').push({
            dataCreated : new Date().getTime()

        });
    }
}