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
var tab_component_1 = require("../tab/tab.component");
var tabbed_pane_service_1 = require("../tabbed-pane.service");
var TabbedPaneComponent = /** @class */ (function () {
    function TabbedPaneComponent(svc) {
        this.svc = svc;
        this.activeIdChange = new core_1.EventEmitter();
    }
    Object.defineProperty(TabbedPaneComponent.prototype, "tabs", {
        get: function () {
            if (!this.tabList)
                return [];
            return this.tabList.toArray();
        },
        enumerable: true,
        configurable: true
    });
    TabbedPaneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svc.jumpBy$.subscribe(function (offset) {
            _this.activeId += offset;
            _this.activate(_this.activeId);
        });
    };
    Object.defineProperty(TabbedPaneComponent.prototype, "currentTabTitle", {
        get: function () {
            if (!this.tabs || !this.tabs[this.activeId - 1])
                return null;
            return this.tabs[this.activeId - 1].title;
        },
        enumerable: true,
        configurable: true
    });
    TabbedPaneComponent.prototype.ngAfterContentInit = function () {
        this.activate(this.activeId);
    };
    TabbedPaneComponent.prototype.activate = function (id) {
        this.activeId = id;
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.visible = tab.id == this.activeId;
        }
        this.activeIdChange.emit(this.activeId);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TabbedPaneComponent.prototype, "activeId", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TabbedPaneComponent.prototype, "activeIdChange", void 0);
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent),
        __metadata("design:type", core_1.QueryList)
    ], TabbedPaneComponent.prototype, "tabList", void 0);
    TabbedPaneComponent = __decorate([
        core_1.Component({
            selector: 'tabbed-pane',
            templateUrl: './tabbed-pane.component.html',
            styleUrls: ['./tabbed-pane.component.css'],
            viewProviders: [tabbed_pane_service_1.TabbedPaneService]
        }),
        __metadata("design:paramtypes", [tabbed_pane_service_1.TabbedPaneService])
    ], TabbedPaneComponent);
    return TabbedPaneComponent;
}());
exports.TabbedPaneComponent = TabbedPaneComponent;
//# sourceMappingURL=tabbed-pane.component.js.map