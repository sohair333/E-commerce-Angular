import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categorie$ :any;

  constructor( categorieService:CategoriesService,private productService:ProductService) {
    this.categorie$ = categorieService.getCategories();
   }

  ngOnInit(): void {
  }

  save( product:any ){

    this.productService.create(product);
  }

}
