import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctWord'
})
export class CorrectWordPipe implements PipeTransform {

  transform(value: number | undefined): unknown {
    switch (value) {
      case 1:
      case 21:
        return value + ' сезон';
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
        return value + ' сезона';
      default:
        return value + ' сезонов';
    }
  }

}
