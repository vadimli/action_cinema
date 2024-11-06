import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCarouselComponent } from './films-carousel.component';

describe('MainPageCarouselFilmsComponent', () => {
  let component: FilmsCarouselComponent;
  let fixture: ComponentFixture<FilmsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmsCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
