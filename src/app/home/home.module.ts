import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ApgarComponent} from '../apgar/apgar.component'

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent, ApgarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
