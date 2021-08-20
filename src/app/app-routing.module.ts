import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './views/detail-product/detail-product/detail-product.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: () => import('../app/views/stores/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/views/admin/admin.module').then((m) => m.AdminModule),
  },
  //errors
  { path: '', redirectTo: "store", pathMatch:'full'},
  //wrong url
  { path: "**",redirectTo:"store"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
