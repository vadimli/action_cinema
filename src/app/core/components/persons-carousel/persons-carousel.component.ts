import { Component, Input } from '@angular/core';
import { IPerson } from '../../../shared/models/films/person';
import { ResponsiveOptions } from '../films-carousel/films-carousel.component';
import { PlatformService } from '../../../shared/services/platform.service';

const PERSON_CAROUSEL_CONFIG: ResponsiveOptions[] = [
  {
    breakpoint: '576px',
    numVisible: 2.3,
    numScroll: 2,
  },
  {
    breakpoint: '1024px',
    numVisible: 4.3,
    numScroll: 2,
  },
  {
    breakpoint: '1200px',
    numVisible: 8,
    numScroll: 2,
  },
];

@Component({
  selector: 'app-persons-carousel',
  templateUrl: './persons-carousel.component.html',
  styleUrl: './persons-carousel.component.scss',
})
export class PersonsCarouselComponent {
  @Input() public persons: IPerson[];

  public responsiveOptions: ResponsiveOptions[] = PERSON_CAROUSEL_CONFIG;

  public get isDesktop(): boolean {
    return this._platform.isDesktop();
  }

  constructor(private _platform: PlatformService) {}
}
