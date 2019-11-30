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
    category: "Thailand",
    caption: "Welder",
    url: "../assets/images/thailand/welder.jpg"
  },
  {
    id: 2,
    category: "Thailand",
    caption: "Pancake Seller",
    url: "../assets/images/thailand/pancake-seller.jpg"
  },
  {
    id: 3,
    category: "Thailand",
    caption: "Girl with Blanket",
    url: "../assets/images/thailand/girl-with-blanket.jpg"
  }
];
