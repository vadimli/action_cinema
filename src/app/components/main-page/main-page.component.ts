import {Component, OnInit} from '@angular/core';
import {CarouselConfigItem, MAIN_PAGE_CONFIG} from "./main-page.config";



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  public mainPageConfig: CarouselConfigItem[] = MAIN_PAGE_CONFIG;

  public get mainCarouselValue(): CarouselConfigItem {
    return this.mainPageConfig.find((item: CarouselConfigItem) => item.main);
  }

  public get otherCarouselValue(): CarouselConfigItem[] {
    return this.mainPageConfig.filter((item: CarouselConfigItem) => !item.main);
  }

  ngOnInit(): void {

  }

}
