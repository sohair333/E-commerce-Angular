import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-Cart';
import { ShoppingCartService } from '../shared/shopppingCart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shoppping-cart',
  templateUrl: './shoppping-cart.component.html',
  styleUrls: ['./shoppping-cart.component.css']
})
export class ShopppingCartComponent implements OnInit {
  Cart$ !:Observable<ShoppingCart>;
  constructor(private shopppingCartService:ShoppingCartService) { }

  async ngOnInit() {
    this.Cart$  = await this.shopppingCartService.getCart();
  }

}
