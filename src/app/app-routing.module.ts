import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './screens/products/products.component';
import { AddQuantityComponent } from './components/add-quantity/add-quantity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/add", component: AddProductComponent },
  { path: "products/add-quantity/:id", component: AddQuantityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
