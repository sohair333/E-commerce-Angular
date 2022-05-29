
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { map} from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class CategoriesService{
    constructor(private angularFireDb:AngularFireDatabase){

    }
    getCategories(){
        return this.angularFireDb.list('/categories',(ref) => ref.orderByChild('name'))
        .snapshotChanges()
        .pipe(
            map((actions:any) =>{
                return actions.map((actions:any) =>({
                    key:actions.key,
                    val:actions.payload.val()
                }));
            })
        );
    }
}