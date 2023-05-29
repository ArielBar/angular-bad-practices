import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeInClickComponent } from './subscribe-in-click.component';

const routes: Routes = [{ path: '', component: SubscribeInClickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeInClickRoutingModule { }
