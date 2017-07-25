import {Component} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">

      <app-header>
        <app-title title="MY APP"></app-title>
        <app-input (value)="addItem($event)"></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="items"></app-list>
      </app-main>

      <app-footer>
        <app-counter count="100"
                     text="users"></app-counter>
        <app-button></app-button>
      </app-footer>

    </section>
  `,
})
export class TodolistComponent {

  public items: Item[];

  constructor() {
    this.items  = [];
  }

  addItem(value) {
    this.items.push(new Item(value))
  }

}
