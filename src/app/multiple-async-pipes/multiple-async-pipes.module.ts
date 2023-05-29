import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleAsyncPipesRoutingModule } from './multiple-async-pipes-routing.module';
import { MultipleAsyncPipesComponent } from './multiple-async-pipes.component';


@NgModule({
  declarations: [
    MultipleAsyncPipesComponent
  ],
  imports: [
    CommonModule,
    MultipleAsyncPipesRoutingModule
  ]
})
export class MultipleAsyncPipesModule { }
