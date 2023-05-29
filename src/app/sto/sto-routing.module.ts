import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STOComponent } from './sto.component';

const routes: Routes = [{ path: '', component: STOComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class STORoutingModule { }
