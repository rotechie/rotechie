import { Component, OnInit } from "@angular/core";
import { ChristmasCardGalleryService } from "../../SERVICES/christmas-card-gallery.service";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"]
})
export class ImageSliderComponent implements OnInit {
  title = "Christmas";
  visibleImages: any[] = [];
  constructor(
    private ChristmasCardGalleryService: ChristmasCardGalleryService
  ) {
    this.visibleImages = this.ChristmasCardGalleryService.getImages();
  }
  ngOnChanges() {
    this.visibleImages = this.ChristmasCardGalleryService.getImages();
  }
  ngOnInit() {}
}
