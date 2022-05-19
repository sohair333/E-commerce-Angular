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
    ShopppingCartComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
