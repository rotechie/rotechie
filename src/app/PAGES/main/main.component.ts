import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  globalListenFunc: Function;

  constructor(
    private professional: ElementRef,
    private leisure: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.professional.nativeElement = document.querySelector(
      ".ega_logoman_image_left"
    );
    this.leisure.nativeElement = document.querySelector(
      ".ega_logoman_image_right"
    );

    let professional = this.professional.nativeElement;
    let leisure = this.leisure.nativeElement;
    professional.hidden = true;
    leisure.hidden = false;

    let getWidth = function() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    };
    getWidth();
    var getWidthDivision = getWidth() / 2;

    this.globalListenFunc = this.renderer.listen("document", "mousemove", e => {
      var mouseX = e.pageX;

      if (mouseX < getWidthDivision) {
        professional.hidden = false;
        leisure.hidden = true;
      } else {
        leisure.hidden = false;
        professional.hidden = true;
      }
    });
  }
  ngOnDestroy() {
    // remove listener
    this.globalListenFunc();
  }
}
