import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class DetailProductModule { }
