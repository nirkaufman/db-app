import { Item } from './../item';
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent  {

  @Input() items: Item[];

}
