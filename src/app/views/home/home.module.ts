import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class HomeModule { }
