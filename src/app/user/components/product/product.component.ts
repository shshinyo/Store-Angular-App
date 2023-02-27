import { Component, Input } from '@angular/core';
import { Animations } from '@shared/animations/animations';
import { IProduct } from 'src/app/admin/utils/interfaces/products.interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product!: IProduct;
}
