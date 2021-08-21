import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './views/home/home.module';
import { DetailProductModule } from './views/detail-product/detail-product.module';
import { AdminDetailsModule } from './views/admin-details/admin-details.module';
import { AdminHomeComponent } from './views/admin-home/admin-home/admin-home.component';
import { AdminOverviewComponent } from './views/admin-overview/admin-overview/admin-overview.component';
import { AdminDetailsComponent } from './views/admin-details/admin-details/admin-details.component';
import { AdminModule } from './views/admin/admin.module';
import { StoreModule } from './views/stores/store.module';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminOverviewComponent,
    AdminDetailsComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailProductModule,
    AdminDetailsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AdminModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
