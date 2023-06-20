import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NgCommonModule, CommonRoutingModule, TranslateModule],
})
export class CommonModule {}
