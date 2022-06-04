import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../models';
import { CategoriesService } from '../shared/categories.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products$: Product[] = [];
  filteredProducts: Product[] = [];
  categories$: any;
  category!: string | null;
  constructor(
    PService: ProductService,
    categoryService: CategoriesService,
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
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {}
}
