import {Directive, ElementRef, Renderer2, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  @HostBinding('id')
  public elmId: string;

  @HostListener('input', ['$event.target.value'])
  onEvent(value) {

  }

}
