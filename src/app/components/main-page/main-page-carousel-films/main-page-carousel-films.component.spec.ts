import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCarouselFilmsComponent } from './main-page-carousel-films.component';

describe('MainPageCarouselFilmsComponent', () => {
  let component: MainPageCarouselFilmsComponent;
  let fixture: ComponentFixture<MainPageCarouselFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageCarouselFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageCarouselFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
