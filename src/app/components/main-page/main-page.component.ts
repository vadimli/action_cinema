import {Component, OnInit} from '@angular/core';
import {MAIN_PAGE_CONFIG, MainPageConfigItem} from "./main-page.config";



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  public mainPageConfig: MainPageConfigItem[] = MAIN_PAGE_CONFIG;

  ngOnInit(): void {

  }


}
