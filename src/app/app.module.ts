import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductService } from './services/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BackBtnComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    ProductFilterComponent,
    ProductsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
