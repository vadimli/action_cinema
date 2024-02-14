import {Component, Input} from '@angular/core';
import {IPerson} from "../../../shared/models/films/person";

@Component({
  selector: 'app-persons-carousel',
  templateUrl: './persons-carousel.component.html',
  styleUrl: './persons-carousel.component.scss'
})
export class PersonsCarouselComponent {

  @Input() public persons: IPerson[];

}
