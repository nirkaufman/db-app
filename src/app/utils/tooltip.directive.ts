import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  private element: ElementRef;
  private renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2) {
    this.element = element;
    this.renderer = renderer;
  }

  ngOnInit(): void {
    this.renderer.listen(this.element.nativeElement, 'mouseover', () => {})
  }
}
