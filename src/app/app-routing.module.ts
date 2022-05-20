import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';
import { EditeProdustComponent } from './products/EditeProdust/edite-produst.component';
import { ProductsComponent } from './products/products.component';


const approutes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]}, 
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:ProductsComponent},
    {path:'new',component:EditeProdustComponent},
    {path:':id',component:DetailsProductsComponent},
    {path:':id/edit',component:EditeProdustComponent}
  ],canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
