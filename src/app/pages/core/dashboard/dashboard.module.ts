import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    DashboardComponent,
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    TranslateModule,
  ]
})
export class DashboardModule {
}
