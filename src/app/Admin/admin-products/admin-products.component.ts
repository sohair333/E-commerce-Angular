import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$:any;

  constructor(private pService:ProductService) { 
    this.products$=this.pService.getAll().snapshotChanges();
  }

  ngOnInit(): void {
  }

}
