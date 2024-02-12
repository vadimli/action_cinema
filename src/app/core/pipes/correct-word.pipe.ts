import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctWord'
})
export class CorrectWordPipe implements PipeTransform {

  transform(value: number | undefined): unknown {
    switch (value) {
      case 1 || 21:
        return ' сезон';
      case 2 || 3 || 4 || 22 || 23 || 24:
        return ' сезона';
      default:
        return ' сезонов';
    }
  }

}
