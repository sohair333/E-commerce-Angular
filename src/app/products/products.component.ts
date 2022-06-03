import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { CategoriesService } from '../shared/categories.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products$ :any;
  categories$:any;
  constructor(PService:ProductService,categoryService:CategoriesService) { 
    this.Products$ = PService.getAll();
    this.categories$ = categoryService.getCategories();
    
  }

  ngOnInit(): void {
    
  }

}
