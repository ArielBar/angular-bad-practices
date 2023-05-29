import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { STORoutingModule } from './sto-routing.module';
import { STOComponent } from './sto.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    STOComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    STORoutingModule
  ]
})
export class STOModule { }
