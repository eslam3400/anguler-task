import { ProductService } from './../../Service/product.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.sass']
})
export class AddQuantityComponent {

  productID = Number(this.route.snapshot.paramMap.get('id'));
  addQuantity = new FormGroup({
    quantity: new FormControl(null),
    cost: new FormControl(null)
  });

  constructor(private route: ActivatedRoute, private products: ProductService, private router: Router) { }

  onSubmit() {
    this.products.addProductQuantity(this.addQuantity.value.quantity, this.addQuantity.value.cost, this.productID)
    console.log(this.addQuantity.value.quantity, this.addQuantity.value.cost, this.productID);
    this.router.navigate(['/products'])
  }
}
