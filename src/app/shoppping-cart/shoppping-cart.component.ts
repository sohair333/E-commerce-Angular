import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-Cart';
import { ShoppingCartService } from '../shared/shopppingCart.service';
import { Observable } from 'rxjs';
import { pro,Product } from '../models';
@Component({
  selector: 'app-shoppping-cart',
  templateUrl: './shoppping-cart.component.html',
  styleUrls: ['./shoppping-cart.component.css']
})
export class ShopppingCartComponent implements OnInit {
  @Input('product') product!: Product;
  Cart$ !:Observable<ShoppingCart>;
  constructor(private shopppingCartService:ShoppingCartService) { }

  async ngOnInit() {
    this.Cart$  = await this.shopppingCartService.getCart();
  }
  ClearCart(){
    this.shopppingCartService.clearCart();
  }

}
