import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './layout/footer/footer.component';
import {TopBarComponent} from './layout/top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {BlankComponent} from './layout/blank/blank.component';
import {MainComponent} from './layout/main/main.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BackgroundComponent} from './layout/background/background.component';
import {LoadingInitComponent} from "./layout/loading-init/loading-init.component";
import {HttpInterceptorProviders} from "./interceptors/interceptors";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({ declarations: [
        AppComponent,
        FooterComponent,
        TopBarComponent,
        BlankComponent,
        MainComponent,
        LoadingInitComponent,
        BackgroundComponent,
    ],
    exports: [
        TranslateModule,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'es',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        AppRoutingModule], providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        HttpInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {
}
