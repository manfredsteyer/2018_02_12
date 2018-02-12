"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = {
    issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'spa-demo',
    scope: 'openid profile email voucher'
    //           Identity       | Access
    //           Id-Token       | Access-Token
    //           OIDC Standard  | Anwendungs-spezifisch
};
//# sourceMappingURL=auth.config.js.map