
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService, 
        private oauthService: OAuthService) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        
    ) {
        
        if (!this.authService.userName) {
            this.router.navigate(['/home', { needsLogin: true }]);
        }

        return true;

    }
}