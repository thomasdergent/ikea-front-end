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
import { MsalInterceptorConfiguration, MsalGuardConfiguration, MsalBroadcastService, MsalGuard, MsalInterceptor, MsalRedirectComponent, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication, BrowserCacheLocation, InteractionType } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


// Azure AD Client Id & Redirect URL comes here
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '1e80ca78-83e5-4da3-912d-626d88ede4e8',
      redirectUri: 'http://localhost:4200/admin/home',
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: false
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    },
    loginFailedRoute: '/login-failed'
  };
}

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
