import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.scss"]
})
export class ImageGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var slideIndex = 1;
    showSlides(slideIndex);

    let p = document.getElementById("prev") as HTMLObjectElement;
    p.addEventListener("click", function() {
      showSlides((slideIndex -= 1));
    });
    let n = document.getElementById("next") as HTMLObjectElement;
    n.addEventListener("click", function() {
      showSlides((slideIndex += 1));
    });

    // function currentSlide(n) {
    //   showSlides((slideIndex = n));
    // }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }
}
