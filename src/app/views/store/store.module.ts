import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class StoreModule { }
