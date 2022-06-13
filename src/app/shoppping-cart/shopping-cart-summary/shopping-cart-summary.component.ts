import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-Cart';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
  @Input('cart') cart !: ShoppingCart;
  
  constructor() { }
  ngOnInit(): void {
  }

}
