import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ShoppingCartService } from 'src/app/shared/shopppingCart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product !:Product;
  @Input('show-actions') showActoins = true;
  constructor(private shopppingService:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(product:Product){

    let CartID = localStorage.getItem('cartId');
    if(!CartID){
      this.shopppingService.create().then( (res:any) =>{
        localStorage.setItem('cartId',res.key);

        ///add to shopping cart

    });
  }
    else{
      // add to shoppping cart
    }
  }
}
