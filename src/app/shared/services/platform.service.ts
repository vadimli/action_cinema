import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PlatformEnum } from '../models/platform.enum';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public isMobile(): boolean {
    return this.breakpointObserver.isMatched(['(max-width: 576px)']);
  }

  public isLargeMobile(): boolean {
    return this.breakpointObserver.isMatched(['(max-width: 769px)']);
  }

  public isTablet(): boolean {
    return this.breakpointObserver.isMatched(['(min-width: 576px), (max-width: 992px)']);
  }

  public isDesktop(): boolean {
    return this.breakpointObserver.isMatched(['(min-width: 1024px)']);
  }

  public currentPlatform(): PlatformEnum {
    if (this.breakpointObserver.isMatched(['(max-width: 576px)'])) {
      return PlatformEnum.MOBILE;
    }
    if (this.breakpointObserver.isMatched(['(min-width: 576px), (max-width: 992px)'])) {
      return PlatformEnum.TABLET;
    }
    return PlatformEnum.DESKTOP;
  }
}
