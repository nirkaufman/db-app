import {Component} from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">

      <app-header>
        <app-title title="MY APP"></app-title>
        <app-input (value)="list.addItem($event)"></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
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

  public list: ListService;

  constructor(list: ListService) {
    this.list = list;
  }

}
