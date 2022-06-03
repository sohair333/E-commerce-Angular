import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products$ :any;
  constructor(PService:ProductService) { 
    this.Products$ = PService.getAll();
  }

  ngOnInit(): void {
    
  }

}
