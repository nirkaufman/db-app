import { Component, OnInit } from '@angular/core';
import {ItemComponent} from './item/item.component';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product Works! {{ item }}
    </p>
  `,
  styles: []
})
export class ProductComponent extends ItemComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
