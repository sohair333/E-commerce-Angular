import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FilterableProductsComponent } from './filterable-products/filterable-products.component';
import { HomeComponent } from './home/home.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';
import { EditeProdustComponent } from './products/EditeProdust/edite-produst.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const approutes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}, 
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:ProductsComponent},
    {path:'new',component:EditeProdustComponent},
    {path:':id',component:DetailsProductsComponent},
    {path:':id/edit',component:EditeProdustComponent}
  ],canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'gallery',component:FilterableProductsComponent},
  {path:'reviews',component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
