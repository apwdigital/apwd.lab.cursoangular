import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localPt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync('noop'),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
