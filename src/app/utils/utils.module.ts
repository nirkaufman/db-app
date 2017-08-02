import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LowPipe} from './low.pipe';
import {CountPipe} from './count.pipe';
import { MarkerDirective } from './marker.directive';
import { TooltipDirective } from './tooltip.directive';
import {IfDirective} from './if.directive';

@NgModule({
  imports     : [CommonModule],
  providers   : [LowPipe],
  declarations: [LowPipe, CountPipe, MarkerDirective, TooltipDirective, IfDirective],
  exports     : [LowPipe, CountPipe, MarkerDirective, TooltipDirective, IfDirective],
})
export class UtilsModule { }
