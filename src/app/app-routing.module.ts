import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule} from '@nativescript/angular'
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),

  },

  {
    path: 'apgar',
    loadChildren: () => import('~/app/apgar/apgar.module').then((m)=> m.ApgarModule)
  }

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
