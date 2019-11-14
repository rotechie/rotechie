import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisurePhotographyComponent } from './leisure-photography.component';

describe('LeisurePhotographyComponent', () => {
  let component: LeisurePhotographyComponent;
  let fixture: ComponentFixture<LeisurePhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeisurePhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisurePhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
