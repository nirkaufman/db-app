import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  @Input()
  public appMarker: string;

  @HostBinding('style.background')
  public backgroundColor: string;

  @HostListener('mouseenter')
  public mark() {
    this.backgroundColor = this.appMarker;
  }

  @HostListener('mouseleave')
  unmark() {
    this.backgroundColor = '';
  }

}
