import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';
import { ProductService } from 'src/app/shared/product.service';
import { take } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
export interface Product {
  title: string;
  price: number;
  categorie: string;
  imageUrl: string;
}
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categorie$: any;
  product: Product = {} as Product;
  id:any;

  constructor(
    private router: Router,
    private categorieService: CategoriesService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.categorie$ = categorieService.getCategories();
    
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
    
    this.productService.get(id).pipe(take(1)).subscribe((p:any) => this.product = p);
    }
    }

  save(product: any) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
