import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent  {
  @Output() value = new EventEmitter<string>();
}
