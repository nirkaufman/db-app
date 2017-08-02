import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'up'
})
export class UpPipe implements PipeTransform {

  transform(value: string, suffix: string): string{
    return `${value} ${suffix}`;
  }

}
