import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/models';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit ,OnDestroy {
  products$ !:Product[];
  subscription !:Subscription;
  filteredProducts !: any[];

  constructor(private pService:ProductService) { 
    this.subscription=this.pService.getAll().snapshotChanges().subscribe((prodcuts:any) => this.filteredProducts = this.products$ = prodcuts);
  }

  ngOnInit(): void {
  }
  filter(query :string){
    console.log(query);
    this.filteredProducts = (query) ?
    this.products$.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products$;


  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
