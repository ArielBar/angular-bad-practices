import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleAsyncPipesComponent } from './multiple-async-pipes.component';

const routes: Routes = [{ path: '', component: MultipleAsyncPipesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleAsyncPipesRoutingModule { }
