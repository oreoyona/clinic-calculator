import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule} from '@nativescript/angular'
import { PamComponent } from '../app/pam/pam.component'
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),

  },

  {
    path: 'apgar',
    loadChildren: () => import('~/app/apgar/apgar.module').then((m)=> m.ApgarModule)
  },
  {
    path: 'pam',
    component: PamComponent,
    outlet: 'secondary'
  }

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
