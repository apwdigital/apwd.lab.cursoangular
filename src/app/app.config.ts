import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localPt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(
      {
        paramsInheritanceStrategy: 'always'
      })),
    provideHttpClient(),
    provideAnimationsAsync('noop'),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};