import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing-module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './components/details/admin-details.component';
import { AdminOverviewComponent } from './components/overview/admin-overview.component';
import { AdminInputComponent } from './components/input/admin-input.component';
import { AdminDeleteComponent } from './components/delete/admin-delete.component';
import { AdminHomeComponent } from './components/home/admin-home.component';
import { StockOverviewComponent } from './components/stockbeheer-overview/stock-overview.component';
import { AdminStockbeheerInputComponent } from './components/stockbeheer-input/admin-stockbeheer-input.component';
import { AdminStockbeheerDetailsComponent } from './components/stockbeheer-details/admin-stockbeheer-details.component';
import { AdminStockbeheerDeleteComponent } from './components/stockbeheer-delete/admin-stockbeheer-delete.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminOverviewComponent,
    AdminDetailsComponent,
    AdminInputComponent,
    AdminDeleteComponent,
    AdminHomeComponent,
    StockOverviewComponent,
    AdminStockbeheerInputComponent,
    AdminStockbeheerDetailsComponent,
    AdminStockbeheerDeleteComponent,
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
