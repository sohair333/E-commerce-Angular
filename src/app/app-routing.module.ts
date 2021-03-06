import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';

import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ShopppingCartComponent } from './shoppping-cart/shoppping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductFormComponent } from './Admin/product-form/product-form.component';

import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BestSellingPackageComponent } from './best-selling-package/best-selling-package.component';


const approutes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}, 
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:ProductsComponent},
    
  ],canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'testimonials',component:TestimonialsComponent,canActivate:[AuthGuard]},
  {path:'contactUs',component:ContactUsComponent,canActivate:[AuthGuard]},
  {path:"gallery",component:GalleryComponent,canActivate:[AuthGuard]},
  {path:'best-selling-packages',component:BestSellingPackageComponent,canActivate:[AuthGuard]},
  {path:'reviews',component:ReviewsComponent,canActivate:[AuthGuard]},
  {path:'shopping-cart',canActivate:[AuthGuard],component:ShopppingCartComponent},
  {path:'order-sucess/:id',canActivate:[AuthGuard],component:OrderSuccessComponent},
  {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuard]},
  {path:'my-orders',component:MyOrdersComponent,canActivate:[AuthGuard]},
  {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuard]},
  {path:'admin/product/new',component:ProductFormComponent,canActivate:[AuthGuard]},
  {path:'admin/product/:id',component:ProductFormComponent,canActivate:[AuthGuard]},
  {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuard]},
  {path:'page-not-found',component:PageNotFoundComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
