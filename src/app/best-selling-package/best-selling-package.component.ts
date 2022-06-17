import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-selling-package',
  templateUrl: './best-selling-package.component.html',
  styleUrls: ['./best-selling-package.component.css']
})
export class BestSellingPackageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  detailsProduct(event:Event){
    this.router.navigate(['/best-selling-packages']);
  }

}
