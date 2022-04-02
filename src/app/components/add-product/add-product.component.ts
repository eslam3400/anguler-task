import { Router } from '@angular/router';
import { ProductService } from './../../Service/product.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {

  addProduct = new FormGroup({
    name: new FormControl(null),
    price: new FormControl(null),
    quantity: new FormControl(null),
    cost: new FormControl(null)
  });

  constructor(private ProductService: ProductService, private router: Router) { }

  submit() {
    this.ProductService.addProduct(this.addProduct.value);
    this.addProduct.reset();
    this.router.navigate(['products']);
  }

  onSubmit() {
    if (this.addProduct.value.quantity != null || this.addProduct.value.cost != null) {
      if (this.addProduct.value.quantity == null || this.addProduct.value.cost == null) alert("please enter both fields");
      else this.submit();
    } else this.submit();
  }

}
