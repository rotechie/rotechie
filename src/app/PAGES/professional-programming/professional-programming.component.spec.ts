import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProgrammingComponent } from './professional-programming.component';

describe('ProfessionalProgrammingComponent', () => {
  let component: ProfessionalProgrammingComponent;
  let fixture: ComponentFixture<ProfessionalProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
