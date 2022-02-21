import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelsToNumbers'
})
export class VowelsToNumbersPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').map(leter => leter.replace('a', '4')
    .replace('e', '3')
    .replace('i', '1')
    .replace('o', '0')
    .replace('u', '11')).join('');
  }

}
