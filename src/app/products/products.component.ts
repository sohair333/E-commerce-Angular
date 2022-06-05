import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { pro, Product } from '../models';

import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products$: pro[] = [];
  filteredProducts: pro[] = [];

  category!: string | null;
  constructor(
    PService: ProductService,
    activateRoute: ActivatedRoute
  ) {
    PService.getAll().pipe(switchMap((products) => 
    {
      this.Products$ = products;
      return activateRoute.queryParamMap;
    })).subscribe((params) => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.Products$.filter((p) => p.categorie === this.category)
          : this.Products$;
     
    });

    
  }

  ngOnInit(): void {}
}
