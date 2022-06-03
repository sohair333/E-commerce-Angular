import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/models';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  products$: Array<Product> = [];
  subscription!: Subscription;
  filteredProducts: any[] =[];

  constructor(private pService: ProductService) {
    this.subscription =  this.pService.getAll().subscribe(products => {
      this.filteredProducts =  this.products$ = products;
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    
   
  }
  /// fix search bug
  filter(query: string) {
    this.filteredProducts = (query)
      ? this.products$.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products$;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dtTrigger.unsubscribe();
  }
}
