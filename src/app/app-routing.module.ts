import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './views/detail-product/detail-product/detail-product.component';
import { HomeComponent } from './views/home/home/home.component';
import { StoreComponent } from './views/store/store/store.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/store/:storeName', component: StoreComponent },
  { path: 'store/:storeName/detail/:articleNumber', component: DetailProductComponent },
  //errors
  { path: '', redirectTo: "home", pathMatch:'full'},
  //wrong url
  { path: "**",redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
