import { Pipe, PipeTransform } from '@angular/core';
import { ValueINfo } from '../../shared/models/person/person-full-info';

@Pipe({
  name: 'getValueInObject',
})
export class GetValueInObjectPipe implements PipeTransform {
  transform(value: ValueINfo[]): string {
    if (!!value && !!value.length) {
      const result: string[] = [];
      value.forEach((item: ValueINfo) => {
        result.push(item.value as string);
      });

      return result.join(', ');
    }
    return '';
  }
}
