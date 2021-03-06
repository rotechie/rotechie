import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  // globalListenFunc: Function;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(
    private professional: ElementRef,
    private leisure: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    //   this.professional.nativeElement = document.querySelector(
    //     ".ega_logoman_image_left"
    //   );
    //   this.leisure.nativeElement = document.querySelector(
    //     ".ega_logoman_image_right"
    //   );
    //   let professional = this.professional.nativeElement;
    //   let leisure = this.leisure.nativeElement;
    //   professional.style.opacity = 1;
    //   leisure.style.opacity = 0;
    //   let getWidth = function() {
    //     return Math.max(document.body.offsetWidth);
    //   };
    //   var getWidthDivision = getWidth() / 2;
    //   this.resizeObservable$ = fromEvent(window, "resize");
    //   this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
    //     getWidthDivision = getWidth() / 2;
    //   });
    //   this.globalListenFunc = this.renderer.listen("document", "mousemove", e => {
    //     if (e.pageX < getWidthDivision) {
    //       professional.style.opacity = 1;
    //       leisure.style.opacity = 0;
    //     } else {
    //       leisure.style.opacity = 1;
    //       // leisure.style.position = "absolute";
    //       professional.style.opacity = 0;
    //     }
    //   });
    // }
    // ngOnDestroy() {
    //   // remove listener
    //   this.globalListenFunc();
    //   this.resizeSubscription$.unsubscribe();
  }
}
