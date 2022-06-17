import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { loadingSpinnerCOmponent } from './shared/loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopppingCartComponent } from './shoppping-cart/shoppping-cart.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';
import { AlertComponent } from './shared/alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';

import { AngularFireModule } from '@angular/fire/compat';

// import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
import { ProductFormComponent } from './Admin/product-form/product-form.component';
import { CategoriesService } from './shared/categories.service';
import { ProductService } from './shared/product.service';
// import { AdminAuthGuardService } from './shared/admin-auth-guard.service';
import {MatIconModule} from '@angular/material/icon';
import { CustomFormsModule } from 'ng2-validation';
import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ShoppingCartService } from './shared/shopppingCart.service';
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { OrderService } from './shared/order.service';
import { ShoppingCartSummaryComponent } from './shoppping-cart/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingFormComponent } from './shoppping-cart/shopping-form/shopping-form.component';
import { NextDirective } from './shared/next.directive';
import { PrevDirective } from './shared/prev.directive';
import { NewProductsComponent } from './new-products/new-products.component';

const firebaseConfig = {
  apiKey: 'AIzaSyC1CxOyoPfxewVfGZ2JzgFVHIkO3hqfoA0',
  authDomain: 'e-commerce-website-a5b86.firebaseapp.com',
  projectId: 'e-commerce-website-a5b86',
  storageBucket: 'e-commerce-website-a5b86.appspot.com',
  messagingSenderId: '993242594375',
  appId: '1:993242594375:web:c7938a4d4df88bd9850562',
  measurementId: 'G-ZRMMW9T3ZX',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewsComponent,
    ContactUsComponent,
    TestimonialsComponent,
    AboutUsComponent,
    AuthComponent,
    loadingSpinnerCOmponent,
    HomeComponent,
    PageNotFoundComponent,
    ShopppingCartComponent,
    ProductCardComponent,
    DetailsProductsComponent,
    AlertComponent,
    FooterComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    GalleryComponent,
    ProductSliderComponent,
    ShoppingCartSummaryComponent,
    ShoppingFormComponent,
    NextDirective,
    PrevDirective,
    NewProductsComponent,
    ProductFilterComponent
    
    
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    NgxDatatableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    UserService,
    CategoriesService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
