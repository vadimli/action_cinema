import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageMainInfoComponent } from './movie-page-main-info.component';

describe('MoviePageMainInfoComponent', () => {
  let component: MoviePageMainInfoComponent;
  let fixture: ComponentFixture<MoviePageMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePageMainInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviePageMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
