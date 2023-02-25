import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ApgarRoutingModule } from './apgar-routing.module'
import { ApgarComponent} from './apgar.component'
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular'

@NgModule({
  imports: [NativeScriptCommonModule, ApgarRoutingModule, TNSCheckBoxModule],
  declarations: [ApgarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ApgarModule {}
