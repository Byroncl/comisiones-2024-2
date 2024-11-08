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
  selector: "app-perfil-catalogo-content",
  templateUrl: "./perfil-catalogo-content.component.html",
  styleUrls: ["./perfil-catalogo-content.component.scss"],
})
export class PerfilCatalogoContentComponent implements OnInit {
  libros: Libro[] = [];
  filteredLibros: Libro[] = [];
  searchText: string = "";

  ngOnInit() {
    this.libros = librosData;
    this.filteredLibros = this.libros;
  }

  filterLibros() {
    this.filteredLibros = this.libros.filter(
      (libro) =>
        libro.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        libro.autor.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
