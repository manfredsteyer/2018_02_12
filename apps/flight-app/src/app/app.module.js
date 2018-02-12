"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var navbar_component_1 = require("./navbar/navbar.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var flight_api_1 = require("@flight-workspace/flight-api");
var flight_booking_module_1 = require("./flight-booking/flight-booking.module");
var home_component_1 = require("./home/home.component");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var basket_component_1 = require("./basket/basket.component");
var shared_module_1 = require("./shared/shared.module");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var logger_lib_1 = require("logger-lib");
var common_1 = require("@angular/common");
var de_1 = require("@angular/common/locales/de");
var de_AT_1 = require("@angular/common/locales/de-AT");
var es_1 = require("@angular/common/locales/es");
common_1.registerLocaleData(de_1.default); // de-DE
common_1.registerLocaleData(de_AT_1.default); // de-AT
common_1.registerLocaleData(es_1.default); // es-ES
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, "/assets/i18n/", ".json");
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                flight_booking_module_1.FlightBookingModule,
                logger_lib_1.LoggerModule.forRoot({ enableDebug: true }),
                flight_api_1.FlightApiModule.forRoot(),
                angular_oauth2_oidc_1.OAuthModule.forRoot(),
                shared_module_1.SharedModule.forRoot(),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
                router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES)
            ],
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                basket_component_1.BasketComponent
            ],
            providers: [
                // { provide: FlightService, useClass: FlightService}
                // FlightService,
                { provide: core_1.LOCALE_ID, useValue: 'de' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map