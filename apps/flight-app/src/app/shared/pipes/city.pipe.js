"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CityPipe = /** @class */ (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value, fmt) {
        var short, long;
        switch (value) {
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                break;
            case 'Graz':
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
                break;
            default:
                short = long = value; //'ROM';
        }
        if (fmt == 'short')
            return short;
        return long;
    };
    CityPipe = __decorate([
        core_1.Pipe({
            name: 'city',
            pure: true
        })
    ], CityPipe);
    return CityPipe;
}());
exports.CityPipe = CityPipe;
//# sourceMappingURL=city.pipe.js.map