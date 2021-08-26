import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGard } from 'src/app/guards/auth.guard';
import { AdminDetailsComponent } from './components/details/admin-details.component';
import { AdminHomeComponent } from './components/home/admin-home.component';
import { AdminInputComponent } from './components/input/admin-input.component';
import { AdminOverviewComponent } from './components/overview/admin-overview.component';
import { StockOverviewComponent } from './components/stockbeheer-overview/stock-overview.component';
import { AdminPageComponent } from './pages/admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,

    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'overview/products', component: AdminOverviewComponent, canActivate: [AuthGard] },
      { path: 'edit/product/:articleNumber', component: AdminDetailsComponent, canActivate: [AuthGard] },
      { path: 'add/product', component: AdminInputComponent, canActivate: [AuthGard] },
      { path: 'home', component: AdminHomeComponent, canActivate: [AuthGard] },
      { path: ':articleNumber/overview/stock', component: StockOverviewComponent, canActivate: [AuthGard] },
    ],
  },
  { path: '**', redirectTo: '/admin/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }