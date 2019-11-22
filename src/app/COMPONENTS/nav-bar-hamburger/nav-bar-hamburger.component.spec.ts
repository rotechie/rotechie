import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavBarHamburgerComponent } from "./nav-bar-hamburger.component";

describe("NavBarHamburgerComponent", () => {
  let component: NavBarHamburgerComponent;
  let fixture: ComponentFixture<NavBarHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarHamburgerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
