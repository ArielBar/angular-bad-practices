import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeInClickRoutingModule } from './subscribe-in-click-routing.module';
import { SubscribeInClickComponent } from './subscribe-in-click.component';


@NgModule({
  declarations: [
    SubscribeInClickComponent
  ],
  imports: [
    CommonModule,
    SubscribeInClickRoutingModule
  ]
})
export class SubscribeInClickModule { }
