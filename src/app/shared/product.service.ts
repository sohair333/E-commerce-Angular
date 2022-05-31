import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable()
export class ProductService{
    constructor(private afDB:AngularFireDatabase ){}

    create(product:any){
        return this.afDB.list('/products').push(product);
    }
    getAll(){
        return this.afDB.list('/products');
    }

}