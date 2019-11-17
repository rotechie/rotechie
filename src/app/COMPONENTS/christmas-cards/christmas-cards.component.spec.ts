import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasCardsComponent } from './christmas-cards.component';

describe('ChristmasCardsComponent', () => {
  let component: ChristmasCardsComponent;
  let fixture: ComponentFixture<ChristmasCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
