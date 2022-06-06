import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { pro, Product } from '../models';

import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shared/shopppingCart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit ,OnDestroy{
  Products$: pro[] = [];
  filteredProducts: pro[] = [];
  cart !:any;
  subscribtion !:Subscription;
  category!: string | null;
   constructor(
    PService: ProductService,
    activateRoute: ActivatedRoute,
    private shoppingCartServise:ShoppingCartService
  ) {

   

    PService.getAll().pipe(switchMap((products) => 
    {
      this.Products$ = products;
      return activateRoute.queryParamMap;
    })).subscribe((params) => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.Products$.filter((p) => p.categorie === this.category)
          : this.Products$;
     
    });

    
  }

 async ngOnInit() {
    this.subscribtion=(await this.shoppingCartServise.getCart()).valueChanges().subscribe(
      (cart:any) =>{
       return this.cart = cart;
      }
    )
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
