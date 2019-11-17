import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leisure-photography",
  templateUrl: "./leisure-photography.component.html",
  styleUrls: ["./leisure-photography.component.scss"]
})
export class LeisurePhotographyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const imgContent = document.querySelectorAll(".img-content-hover");

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        (imgContent[i] as HTMLElement).style.left = e.pageX + "px";
        (imgContent[i] as HTMLElement).style.top = e.pageY + "px";
      }
    }

    document.addEventListener("mousemove", showImgContent);
  }
}
