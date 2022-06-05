import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$ !: any;
  @Input('category') category:any;
  constructor(categoryService:CategoriesService) {
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit(): void {
  }


}
