import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa-demo',
  scope: 'openid profile email voucher'
  //           Identity       | Access
  //           Id-Token       | Access-Token
  //           OIDC Standard  | Anwendungs-spezifisch
}