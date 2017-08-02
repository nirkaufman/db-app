import {Component, DoCheck, NgZone, ChangeDetectorRef} from '@angular/core';
import {StorageService} from '../db-core/storage.service';
import {ListService} from './list.service';

class Lol {
}

@Component({
  selector : 'app-todolist',
  providers: [
    ListService
  ],
  template : `
    <section class="todoapp">
      <span>{{ counter }}</span>
      <app-header>
        <app-title [title]="title"></app-title>
        <app-input (value)="addItem($event)"></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list [items]="list.items"></app-list>
      </app-main>

      <app-footer>
        <app-counter [count]="list.items | count:'completed':false"
                     text="items"></app-counter>
        <app-button></app-button>
      </app-footer>

    </section>
  `,
})
export class TodolistComponent implements DoCheck {

  public list: ListService;
  public title: string;
  public counter = 1;
  private ngZone: NgZone;

  constructor(list: ListService, ngZone: NgZone, cd: ChangeDetectorRef) {
    console.log('TodolistComponent Instance');

    this.list   = list;
    this.ngZone = ngZone;
    this.title  = 'TODOS';

    ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter++;
        if (this.counter % 5 === 0) {
          cd.detectChanges();
        }

      }, 1000);
    })
  }

  ngDoCheck() {
    console.log('CHANGE DETECTION');
  }

  addItem(title) {
    this.list.addItem(title);
  }

}
