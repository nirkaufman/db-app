import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, HostListener} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p (click)="onText.emit()">
      {{ text | up:'!'}}
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnChanges{

  @Input() text: string;
  @Output() onText = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
