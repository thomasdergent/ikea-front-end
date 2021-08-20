import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing-module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './components/details/admin-details.component';
import { AdminOverviewComponent } from './components/overview/admin-overview.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminOverviewComponent,
    AdminDetailsComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    SharedModule,
    AdminRoutingModule,
    RouterModule,
    CommonModule,
  ],
})
export class AdminModule { }
