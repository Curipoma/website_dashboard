import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from "@shared/shared.module";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CoreModule {
}
