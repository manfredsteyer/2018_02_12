import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService, FlightApiModule } from '@flight-workspace/flight-api';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from './shared/shared.module';
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadStrategy } from './shared/preloading/custom-preload-strategy';
import { OAuthModule } from 'angular-oauth2-oidc';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { LoggerModule } from 'logger-lib';

import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeAt from '@angular/common/locales/de-AT';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeDe);     // de-DE
registerLocaleData(localeDeAt);   // de-AT
registerLocaleData(localeEs);     // es-ES

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    LoggerModule.forRoot({ enableDebug: true }),
    FlightApiModule.forRoot(),
    OAuthModule.forRoot(),
    SharedModule.forRoot(),
    
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    
    RouterModule.forRoot(APP_ROUTES, {
      // enableTracing: true
    })
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
],
  providers: [
    // { provide: FlightService, useClass: FlightService}
    // FlightService,
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
