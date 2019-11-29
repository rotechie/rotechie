import { Injectable } from "@angular/core";

@Injectable()
export class ThailandGalleryService {
  thailandImages = [];

  getImages() {
    return (this.thailandImages = ega_thailand_gallery.slice(0));
  }

  getImage(id: number) {
    return ega_thailand_gallery.slice(0).find(image => image.id == id);
  }
}

const ega_thailand_gallery = [
  {
    id: 1,
    category: "Welder",
    caption: "Thailand 2012",
    url: "../assets/images/thailand/welder.jpg"
  },
  {
    id: 2,
    category: "Pancakes",
    caption: "Thailand 2012",
    url: "../assets/images/thailand/pancake-seller.jpg"
  }
];
