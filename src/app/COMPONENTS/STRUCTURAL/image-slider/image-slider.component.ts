import { Component, OnInit } from "@angular/core";
import { ChristmasCardGalleryService } from "../../../SERVICES/christmas-card-gallery.service";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"]
})
export class ImageSliderComponent implements OnInit {
  title = "Christmas Pics";
  photoCategory: string = "";
  christmasImages: any[] = [];
  constructor(
    private ChristmasCardGalleryService: ChristmasCardGalleryService
  ) {
    this.christmasImages = this.ChristmasCardGalleryService.getImages();
  }
  aflack() {
    console.log("turds ahoy");
  }
  ngOnChanges() {
    this.christmasImages = this.ChristmasCardGalleryService.getImages();
  }
  ngOnInit() {}
}
