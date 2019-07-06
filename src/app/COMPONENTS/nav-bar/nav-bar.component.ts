import { Component, OnInit } from "@angular/core";
import {
  style,
  group,
  animate,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [style({ opacity: 0 }), animate(150)]),
      transition(":leave", [
        group([
          animate(
            "0.1s ease",
            style({
              opacity: "1"
            })
          ),
          animate(
            "0.2s 0.1s ease",
            style({
              opacity: 0
            })
          )
        ])
      ])
    ])
  ]
})
export class NavBarComponent implements OnInit {
  public show: boolean = true;

  // Conditionally toggles the hamburger color from white to black and vice versa
  ega_colorChange() {
    if (this.show) {
      return "black";
    }
    return "white";
  }
  // Toggles the showing of the overlay menu
  toggle() {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit() {}
}
