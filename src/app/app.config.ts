import { ApplicationConfig, provideZonelessChangeDetection, } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions, } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptorsFromDi, } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routes } from './routes';
import { TranslateConfig } from './core/translate/translate-config';
import { provideTranslateService } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideTranslateService(TranslateConfig),
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
};
