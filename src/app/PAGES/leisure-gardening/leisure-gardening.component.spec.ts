import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureGardeningComponent } from './leisure-gardening.component';

describe('LeisureGardeningComponent', () => {
  let component: LeisureGardeningComponent;
  let fixture: ComponentFixture<LeisureGardeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeisureGardeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisureGardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
