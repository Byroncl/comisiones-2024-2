import { Component, OnInit } from "@angular/core";
import librosData from "../../models/libros.json";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-home-content",
  templateUrl: "./home-content.component.html",
  styleUrls: ["./home-content.component.scss"],
})
export class HomeContentComponent implements OnInit {
  libros: Libro[] = [];

  ngOnInit(): void {
    this.libros = librosData;
  }
}
