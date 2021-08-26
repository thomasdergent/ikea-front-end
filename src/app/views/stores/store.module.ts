import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing-module';
import { StorePageComponent } from './pages/store.page';
import { StoreOverviewComponent } from './components/overview/store-overview.component';
import { StoreDetailsComponent } from './components/details/store-details.component';
import { StoreHomeComponent } from './components/home/store-home.component';
import { StoreOverviewCategoryComponent } from './components/overview-category/store-overview-category.component';




@NgModule({
  declarations: [
    StorePageComponent,
    StoreOverviewComponent,
    StoreDetailsComponent,
    StoreHomeComponent,
    StoreOverviewCategoryComponent,
  ],
  imports: [
    SharedModule,
    StoreRoutingModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    SharedModule,
    StoreRoutingModule,
    RouterModule,
    CommonModule,
    StorePageComponent,
    StoreOverviewComponent,
    StoreDetailsComponent,
    StoreHomeComponent,
  ],
})
export class StoreModule { }
