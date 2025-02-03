import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
  pure: false
})
export class CutTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
