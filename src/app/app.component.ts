import {Component} from '@angular/core';
import {ListService} from './todolist/list.service';

@Component({
  selector : 'app-root',
  providers: [ListService],
  // templateUrl: './app.component.html',
  template : `
    <input type="checkbox"
           (change)="flag = $event.target.checked">

    <ng-container *ngIf="flag; then thenView  else elseView ">Hey Flag</ng-container>

    <ng-template #thenView>
      <h2>Then View</h2>
    </ng-template>

    <ng-template #elseView>
      <h2>Else View</h2>
    </ng-template>

    <!--<h1 *appIf="flag">Hello Content</h1>-->
  `
})
export class AppComponent {

  public flag: boolean;

  constructor(public list: ListService) {

  }
}
