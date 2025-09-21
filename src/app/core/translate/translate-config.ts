import { TranslateModuleConfig } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const TranslateConfig: TranslateModuleConfig = {
  loader: provideTranslateHttpLoader({
    prefix: '/i18n/',
    suffix: '.json',
  }),
  fallbackLang: 'en',
  lang: 'es',
};
