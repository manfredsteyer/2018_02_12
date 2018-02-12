"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tabbed_pane_service_1 = require("./tabbed-pane.service");
describe('TabbedPaneService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [tabbed_pane_service_1.TabbedPaneService]
        });
    });
    it('should be created', testing_1.inject([tabbed_pane_service_1.TabbedPaneService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tabbed-pane.service.spec.js.map