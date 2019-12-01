import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  globalListenFunc: Function;

  constructor(
    private elementVisible: ElementRef,
    private professional: ElementRef,
    private leisure: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.elementVisible.nativeElement = document.querySelectorAll(
      ".ega_backgroundimage"
    );
    this.professional.nativeElement = document.querySelectorAll(
      ".ega_logoman_image .left"
    );
    this.leisure.nativeElement = document.querySelectorAll(
      ".ega_logoman_image .right"
    );
    console.log(this.elementVisible.nativeElement);
    this.globalListenFunc = this.renderer.listen("document", "mousemove", e => {
      let imageTop = this.elementVisible.nativeElement.getBoundingClientRect()
        .top;
      let imageLeft = this.elementVisible.nativeElement.getBoundingClientRect()
        .left;
      let imageBottom = imageTop + this.elementVisible.nativeElement.height();
      let imageRight = imageLeft + this.elementVisible.nativeElement.width();
      var mouseX = e.pageX;
      var mouseY = e.pageY;
      if (mouseY < imageTop || mouseY > imageBottom) {
        return;
      }
      console.log(imageTop);
      this.elementVisible.nativeElement.hide();
      if (mouseX > imageLeft && mouseX < imageRight) {
        this.leisure.nativeElement.show();
      } else if (mouseX < imageLeft) {
        this.professional.nativeElement.show();
      } else {
        this.leisure.nativeElement.show();
      }
    });
  }
  ngOnDestroy() {
    // remove listener
    this.globalListenFunc();
  }
}
