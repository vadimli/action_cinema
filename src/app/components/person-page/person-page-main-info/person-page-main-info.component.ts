import { Component, Input } from '@angular/core';
import { PersonFullInfo } from '../../../shared/models/person/person-full-info';
import { defaultPhoto } from '../../../constants/default-values';
import { PlatformService } from '../../../shared/services/platform.service';

@Component({
  selector: 'app-person-page-main-info',
  templateUrl: './person-page-main-info.component.html',
  styleUrl: './person-page-main-info.component.scss',
})
export class PersonPageMainInfoComponent {
  @Input() public person: PersonFullInfo;

  public defaultPhoto: string = defaultPhoto;
  public imgLoadError = false;

  public get isMobile(): boolean {
    return this._platform.isMobile();
  }

  constructor(private _platform: PlatformService) {}
}
