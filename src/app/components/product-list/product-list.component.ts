import { ProductService } from './../../Service/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {

  constructor(public ProductService: ProductService) { }

}
