import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './views/home/home.module';
import { StoreModule } from './views/store/store.module';
import { DetailProductModule } from './views/detail-product/detail-product.module';
import { AdminDetailsModule } from './views/admin-details/admin-details.module';
import { AdminHomeComponent } from './views/admin-home/admin-home/admin-home.component';
import { AdminOverviewComponent } from './views/admin-overview/admin-overview/admin-overview.component';
import { AdminDetailsComponent } from './views/admin-details/admin-details/admin-details.component';
import { AdminModule } from './views/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminOverviewComponent,
    AdminDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule,
    StoreModule,
    DetailProductModule,
    AdminDetailsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
