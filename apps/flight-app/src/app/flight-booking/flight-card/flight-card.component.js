"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var FlightCardComponent = /** @class */ (function () {
    function FlightCardComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.selectedChange = new core_1.EventEmitter();
    }
    FlightCardComponent.prototype.ngOnInit = function () {
    };
    FlightCardComponent.prototype.ngOnChanges = function (changes) {
    };
    FlightCardComponent.prototype.ngOnDestroy = function () {
    };
    FlightCardComponent.prototype.select = function () {
        this.selected = true;
        this.selectedChange.next(true);
    };
    FlightCardComponent.prototype.deselect = function () {
        this.selected = false;
        this.selectedChange.next(false);
    };
    FlightCardComponent.prototype.blink = function () {
        var _this = this;
        // Dirty Hack used to visualize the change detector
        // let originalColor = this.element.nativeElement.firstChild.style.backgroundColor;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        //              ^----- DOM-Element
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'white';
            }, 1000);
        });
        return null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FlightCardComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "selectedChange", void 0);
    FlightCardComponent = __decorate([
        core_1.Component({
            selector: 'flight-card',
            templateUrl: './flight-card.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_2.ElementRef, core_2.NgZone])
    ], FlightCardComponent);
    return FlightCardComponent;
}());
exports.FlightCardComponent = FlightCardComponent;
//# sourceMappingURL=flight-card.component.js.map