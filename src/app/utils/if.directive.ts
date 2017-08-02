import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input()
  set appIf(flag: boolean) {
    if (flag) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }

  }

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
  }


}
