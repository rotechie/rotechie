import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisureProgrammingComponent } from './leisure-programming.component';

describe('LeisureProgrammingComponent', () => {
  let component: LeisureProgrammingComponent;
  let fixture: ComponentFixture<LeisureProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeisureProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisureProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
