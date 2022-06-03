import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../models';
import { CategoriesService } from '../shared/categories.service';
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
    PService.getAll().subscribe((products) => {
      this.Products$ = products;
    });
    this.categories$ = categoryService.getCategories();

    activateRoute.queryParamMap.subscribe((params) => {
      this.category = params.get('category');

      this.filteredProducts = (this.category)
        ? this.Products$.filter((p) => p.categorie === this.category)
        : this.Products$;
    });
  }

  ngOnInit(): void {}
}
