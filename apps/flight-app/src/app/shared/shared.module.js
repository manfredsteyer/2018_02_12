"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var city_pipe_1 = require("./pipes/city.pipe");
var auth_guard_1 = require("./auth/auth.guard");
var auth_service_1 = require("./auth/auth.service");
var exit_guard_1 = require("./exit/exit.guard");
var custom_preload_strategy_1 = require("./preloading/custom-preload-strategy");
var auth_interceptor_1 = require("./auth/auth.interceptor");
var http_1 = require("@angular/common/http");
var tab_component_1 = require("./tabbed-pane/tab/tab.component");
var tabbed_pane_component_1 = require("./tabbed-pane/tabbed-pane/tabbed-pane.component");
var pager_component_1 = require("./tabbed-pane/pager/pager.component");
var bad_component_1 = require("./tabbed-pane/bad/bad.component");
var custom_log_formatter_service_1 = require("./logging/custom-log-formatter.service");
var logger_lib_1 = require("logger-lib");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                {
                    provide: logger_lib_1.LogFormatterService,
                    useClass: custom_log_formatter_service_1.CustomLogFormatterService
                },
                custom_preload_strategy_1.CustomPreloadStrategy,
                exit_guard_1.ExitGuard,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }
            ]
        };
    };
    SharedModule.forChild = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                city_pipe_1.CityPipe,
                tab_component_1.TabComponent,
                tabbed_pane_component_1.TabbedPaneComponent,
                pager_component_1.PagerComponent,
                bad_component_1.BadComponent
            ],
            exports: [
                city_pipe_1.CityPipe,
                tab_component_1.TabComponent,
                tabbed_pane_component_1.TabbedPaneComponent,
                bad_component_1.BadComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map