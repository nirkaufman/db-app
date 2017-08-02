import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges} from '@angular/core';
import {Item} from './../item';
import {ListService} from '../list.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector       : 'app-list',
  templateUrl    : './list.component.html',
  styles         : []
})
export class ListComponent {

  @Input() items: Item[];

}
