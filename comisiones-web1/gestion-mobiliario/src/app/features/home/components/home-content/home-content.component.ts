import { Component, AfterViewInit, NgZone } from "@angular/core";

declare var bootstrap: any;

@Component({
  selector: "app-home-content",
  templateUrl: "./home-content.component.html",
  styleUrls: ["./home-content.component.scss"],
})
export class HomeContentComponent implements AfterViewInit {
  c2: string = "assets/img/logo.png";

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // Ejecutar fuera de Angular para evitar conflictos con Zone.js
    this.ngZone.runOutsideAngular(() => {
      const carouselElement = document.getElementById("cardCarousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000, // Tiempo entre slides (ajusta según lo necesites)
          ride: "carousel",
        });
      }
    });
  }
}
