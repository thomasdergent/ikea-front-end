import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreDetailsComponent } from './components/details/store-details.component';
import { StoreHomeComponent } from './components/home/store-home.component';
import { StoreOverviewComponent } from './components/overview/store-overview.component';
import { StorePageComponent } from './pages/store.page';

const routes: Routes = [
  {
    path: '',
    component: StorePageComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: StoreHomeComponent },
      { path: ':storeName/products', component: StoreOverviewComponent },
      { path: ':storeName/article/:articleNumber', component: StoreDetailsComponent },
    ],
  },
  { path: '**',redirectTo:'', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
