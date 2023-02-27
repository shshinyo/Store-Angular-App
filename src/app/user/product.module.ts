import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StarsComponent } from '@shared/components/stars/stars.component';

@NgModule({
  declarations: [ProductRoutingModule.Components],
  imports: [CommonModule, ProductRoutingModule, SharedModule, StarsComponent],
})
export class ProductModule {}
