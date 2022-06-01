import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';
import { ProductService } from 'src/app/shared/product.service';
import { take } from "rxjs/operators";
export interface Product {
  title: string,
  price:number,
  categorie:string,
  imageUrl:string
  
}
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categorie$ :any;
  product :Product ={} as Product;

  constructor( 
    private router:Router,
    private categorieService:CategoriesService,private productService:ProductService,
    private route:ActivatedRoute) {
    this.categorie$ = categorieService.getCategories();
    let id =this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.productService.get(id).valueChanges().pipe(take(1)).subscribe(p => this.product = p);
    } 
   }

  ngOnInit(): void {
    
  }

  save( product:any ){
   
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
 
}
