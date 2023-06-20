import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageDirective} from "@shared/directives";
import {ContentLoadingComponent} from "@shared/components/content-loading/content-loading.component";

@NgModule({
  declarations: [
    ErrorMessageDirective,
    ContentLoadingComponent,
  ],
  exports: [
    ErrorMessageDirective,
    ContentLoadingComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {
}
