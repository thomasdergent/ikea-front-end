import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './components/details/admin-details.component';
import { AdminOverviewComponent } from './components/overview/admin-overview.component';
import { AdminPageComponent } from './pages/admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,

    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview/products/store/:storeName', component: AdminOverviewComponent },
      { path: 'details/store/:storeName/article/:articleNumber', component: AdminDetailsComponent },  
    ],
  },
  { path: '**',redirectTo:'', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}