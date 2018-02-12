import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, GuardsCheckStart, GuardsCheckEnd } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from 'logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  loading: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private oauthService: OAuthService,
    private router: Router,
    private translate: TranslateService
  ) {

    this.loggerService.log('log');
    this.loggerService.debug('debug');

    // this.router.events.subscribe(e => console.debug('router event', e));

    this.router.events.filter( e => e instanceof NavigationStart || e instanceof GuardsCheckEnd).subscribe(e => {
      this.loading = true;
    })

    this.router.events.filter( 
      e => (e instanceof NavigationEnd
      || e instanceof NavigationError
      || e instanceof NavigationCancel
      || e instanceof GuardsCheckStart)
    ).subscribe(e => {
      this.loading = false;
    })


    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();


  }
}

