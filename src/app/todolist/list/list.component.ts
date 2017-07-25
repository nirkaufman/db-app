import { Item } from './../item';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent  {

  @Input() items: Item[];

}
