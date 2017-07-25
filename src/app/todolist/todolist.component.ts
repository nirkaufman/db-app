import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
      <section class="todoapp">

      <app-header>
        <app-title></app-title>
        <app-input></app-input>
      </app-header>

      <app-main>
        <app-toggle></app-toggle>
        <app-list></app-list>
      </app-main>

      <app-footer>
        <app-counter></app-counter>
        <app-button></app-button>
      </app-footer>

    </section>
  `,
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
