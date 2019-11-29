import { Component, OnInit } from "@angular/core";
import { ChristmasCardGalleryService } from "../../../SERVICES/christmas-card-gallery.service";
import { ThailandGalleryService } from "../../../SERVICES/thailand-gallery.service";

@Component({
  selector: "app-image-slider",
  templateUrl: "./image-slider.component.html",
  styleUrls: ["./image-slider.component.scss"]
})
export class ImageSliderComponent implements OnInit {
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
  aflack() {
    console.log("turds ahoy");
  }
  ngOnChanges() {
    this.christmasImages = this.ChristmasCardGalleryService.getImages();
    this.thailandImages = this.ThailandGalleryService.getImages();
  }
  ngOnInit() {}
}
