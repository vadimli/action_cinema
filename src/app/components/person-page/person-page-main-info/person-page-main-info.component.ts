import {Component, Input} from '@angular/core';
import {PersonFullInfo} from "../../../shared/models/person/person-full-info";

@Component({
  selector: 'app-person-page-main-info',
  templateUrl: './person-page-main-info.component.html',
  styleUrl: './person-page-main-info.component.scss'
})
export class PersonPageMainInfoComponent {
  @Input() public person: PersonFullInfo;
}