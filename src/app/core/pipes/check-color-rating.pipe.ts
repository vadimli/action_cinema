import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkColorRating',
})
export class CheckColorRatingPipe implements PipeTransform {
  transform(value: number | string | undefined): string {
    switch (true) {
      case +value >= 7 && +value < 8:
        return 'green';
      case +value < 6:
        return 'red';
      case +value >= 8:
        return 'gold';
      default:
        return 'white';
    }
  }
}
