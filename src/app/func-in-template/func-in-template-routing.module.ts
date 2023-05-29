import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncInTemplateComponent } from './func-in-template.component';

const routes: Routes = [{ path: '', component: FuncInTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncInTemplateRoutingModule { }
