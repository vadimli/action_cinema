import { Pipe, PipeTransform } from '@angular/core';
import { INames } from '../../shared/models/films/names';

@Pipe({
  name: 'getNameInObject',
})
export class GetNameInObjectPipe implements PipeTransform {
  transform(value: INames[] | undefined, quantity: number = 5): string {
    if (!!value && !!value.length) {
      const result: string[] = [];
      value.forEach((item: INames) => {
        if (result.length < quantity) {
          result.push(item.name as string);
        }
      });

      return result.join(', ');
    }
    return '';
  }
}
