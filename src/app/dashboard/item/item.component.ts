import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `generic item`,
})
export class ItemComponent implements OnInit {

  @Input() item: string;
  @Output() onItem = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
}


