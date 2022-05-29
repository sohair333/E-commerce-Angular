import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({
    providedIn: 'root'
  })
export class CategoriesService{
    constructor(private angularFireDb:AngularFireDatabase){

    }
    getCategories(){
        return this.angularFireDb.list('/categories');
    }
}