"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var core_1 = require("@angular/core");
var CustomPreloadStrategy = /** @class */ (function () {
    function CustomPreloadStrategy() {
    }
    CustomPreloadStrategy.prototype.preload = function (route, fn) {
        /*
        return of(true).pipe(
            delay(5000),
            switchMap(d => fn())
        );
        */
        if (route.data && route.data['preload']) {
            return fn();
        }
        return of_1.of(null);
    };
    CustomPreloadStrategy = __decorate([
        core_1.Injectable()
    ], CustomPreloadStrategy);
    return CustomPreloadStrategy;
}());
exports.CustomPreloadStrategy = CustomPreloadStrategy;
//# sourceMappingURL=custom-preload-strategy.js.map