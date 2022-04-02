import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  cost: number;
  quantity: number;
  currentAvgCost: number;
  ProfitMargin: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  counter = 0;

  addProduct(product: Product) {
    product.id = ++this.counter
    this.products.push(product);
  }

  addProductQuantity(quantity: number, cost: number, id: number) {
    this.products.forEach(product => {
      if (product.id == id) {
        if (product.quantity == 0)
          product.currentAvgCost = ((product.currentAvgCost * product.quantity) + cost) / (product.quantity + quantity)
        else
          product.currentAvgCost = cost / quantity
        product.quantity += quantity
        if ((product.price - product.cost) / product.price <= product.cost) product.ProfitMargin = "red"
      }
    });
  }
}
