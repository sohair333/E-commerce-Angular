import { Component, Input, OnInit } from '@angular/core';
import { pro } from 'src/app/models';
import { ShoppingCartService } from 'src/app/shared/shopppingCart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product !:pro;
  @Input('show-actions') showActoins = true;
  constructor(private shopppingService:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(product:pro){
    
    this.shopppingService.addToCart(product);

   
  }
}
