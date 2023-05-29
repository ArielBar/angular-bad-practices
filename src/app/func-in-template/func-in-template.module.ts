import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncInTemplateRoutingModule } from './func-in-template-routing.module';
import { FuncInTemplateComponent } from './func-in-template.component';
import { TriggerComponent } from './trigger/trigger.component';
import { FuncHolderComponent } from './func-holder/func-holder.component';


@NgModule({
  declarations: [
    FuncInTemplateComponent,
    TriggerComponent,
    FuncHolderComponent
  ],
  imports: [
    CommonModule,
    FuncInTemplateRoutingModule
  ]
})
export class FuncInTemplateModule { }
