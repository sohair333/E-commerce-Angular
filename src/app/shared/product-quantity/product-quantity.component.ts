import { Component, Input, OnInit } from '@angular/core';
import { pro } from 'src/app/models';
import { ShoppingCartService } from '../shopppingCart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product!: pro;
  @Input('show-actions') showActoins = true;
  @Input('shopping-cart') shoppingCart: any;
  constructor(private shopppingService: ShoppingCartService) {}

  ngOnInit(): void {}
  removeFromCart(){
    this.shopppingService.removeFromCart(this.product);
  }
  addToCart() {
    this.shopppingService.addToCart(this.product);
  }

   

}
