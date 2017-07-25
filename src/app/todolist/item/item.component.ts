import {Component, EventEmitter, Output, Input} from '@angular/core';
import {Item} from './../item';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styles     : []
})
export class ItemComponent {

  @Input() item: Item;
  @Output() itemClicked = new EventEmitter<Item>();
}
