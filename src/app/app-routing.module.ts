import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'subscribe-in-click',
  loadChildren: () => import('./subscribe-in-click/subscribe-in-click.module').then(m => m.SubscribeInClickModule)
},
  {
    path: 'func-in-template',
    loadChildren: () => import('./func-in-template/func-in-template.module').then(m => m.FuncInTemplateModule)
  },
  {
    path: 'multi-async-pipes',
    loadChildren: () => import('./multiple-async-pipes/multiple-async-pipes.module').then(m => m.MultipleAsyncPipesModule)
  },
  { path: 'STO', loadChildren: () => import('./sto/sto.module').then(m => m.STOModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
