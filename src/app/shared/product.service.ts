import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models';
import { map } from 'rxjs';
@Injectable()
export class ProductService{
   
    public productMock !: Subject<Product>;
    constructor(private afDB:AngularFireDatabase ){}

    create(product:any){
        return this.afDB.list('/products').push(product);
    }
    getAll(){
        // return this.afDB.list('/products');
        return this.afDB.list<Product[]>('/products').snapshotChanges().pipe(
            map( (a:any) =>
                a.map(
                    (ac:any) => {
              
                        const data = ac.payload.val();
                        data.id = ac.key;
                        return data;
              
                      })));
    }
    // get(productId:any){
    //     return this.afDB.object('/products'+productId);
    // }

    get(productId : any) : Observable<Product> {
    
        this.productMock = new Subject();
        
        setTimeout(() => {
          this.productMock.next({ title:'Room' , price : 10,categorie:'Room', imageUrl :'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=' });
          this.productMock.complete();
        }, 100)
    
        return  this.productMock
      }

      update(productId:any,product:Product){
       return  this.afDB.object('/products'+ productId).update(product);
      }

      delete(productId:any){
          this.afDB.object('/products/'+productId).remove();
      }

}

