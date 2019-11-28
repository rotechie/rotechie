import { Injectable } from "@angular/core";

@Injectable()
export class ChristmasCardGalleryService {
  christmasImages = [];

  getImages() {
    return (this.christmasImages = ega_christmas_gallery.slice(0));
  }

  getImage(id: number) {
    return ega_christmas_gallery.slice(0).find(image => image.id == id);
  }
}

const ega_christmas_gallery = [
  {
    id: 1,
    category: "Christmas",
    caption: "Christmas 2015",
    url: "../assets/images/christmas-cards/christmas-card1.jpg"
  },
  {
    id: 2,
    category: "Christmas",
    caption: "Christmas 2016",
    url: "../assets/images/christmas-cards/christmas-card2.jpg"
  },
  {
    id: 3,
    category: "Christmas",
    caption: "Christmas 2017",
    url: "../assets/images/christmas-cards/christmas-card3.jpg"
  },
  {
    id: 4,
    category: "Christmas",
    caption: "Christmas 2018",
    url: "../assets/images/christmas-cards/christmas-card4.jpg"
  }
];
