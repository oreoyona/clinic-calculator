import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular'
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, TNSCheckBoxModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule {}
