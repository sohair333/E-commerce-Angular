import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';
import { ProductService } from 'src/app/shared/product.service';
import { take } from 'rxjs/operators';
import { pro } from 'src/app/models';

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
  product: pro |any = {} as Product;
  id:any;

  constructor(
    private router: Router,
    private categorieService: CategoriesService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.categorie$ = categorieService.getCategories();


    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
    
    this.productService.get(this.id).pipe(take(1)).subscribe((p:any) => this.product = p);
    }
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
    
    this.productService.get(this.id).pipe(take(1)).subscribe((p:any) => this.product = p);
    }
    }

  save(product: any) {
    if(this.id) {this.productService.update(this.id,product);}
    else  {this.productService.create(product);}
    this.router.navigate(['/admin/products']);
  }
  delete(){
    if(!confirm('Are You sure TO delete Item ?!')) {return;}
   
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
   
  }

  
}
