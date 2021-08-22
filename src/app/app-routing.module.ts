import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: '', redirectTo: "/store/home", pathMatch:'full'},
  //wrong url
  { path: "**",redirectTo:"/store/home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
