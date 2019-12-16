import { Component, OnInit } from "@angular/core";
import { ChristmasCardGalleryService } from "../../SERVICES/christmas-card-gallery.service";
import { ThailandGalleryService } from "../../SERVICES/thailand-gallery.service";

@Component({
  selector: "app-leisure-photography",
  templateUrl: "./leisure-photography.component.html",
  styleUrls: ["./leisure-photography.component.scss"]
})
export class LeisurePhotographyComponent implements OnInit {
  title = "Christmas Pics";
  photoCategory: string = "";
  christmasImages: any[] = [];
  thailandImages: any[] = [];
  constructor(
    private ChristmasCardGalleryService: ChristmasCardGalleryService,
    private ThailandGalleryService: ThailandGalleryService
  ) {
    this.christmasImages = this.ChristmasCardGalleryService.getImages();
    this.thailandImages = this.ThailandGalleryService.getImages();
  }

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
  ngOnChanges() {
    this.christmasImages = this.ChristmasCardGalleryService.getImages();
    this.thailandImages = this.ThailandGalleryService.getImages();
  }
}
