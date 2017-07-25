import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent  {

  @Input() label: string;
  @Output() action = new EventEmitter<void>();

}
