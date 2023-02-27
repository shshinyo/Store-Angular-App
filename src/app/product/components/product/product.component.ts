import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/dashborad/utils/interfaces/products.interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product!: IProduct;
}
