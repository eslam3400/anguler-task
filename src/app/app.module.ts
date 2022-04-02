import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './screens/products/products.component';
import { AddQuantityComponent } from './components/add-quantity/add-quantity.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    AddProductComponent,
    ProductsComponent,
    AddQuantityComponent,
    HomeComponent,
    ProductListComponent,
    AppContainerComponent,
    ContentContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
