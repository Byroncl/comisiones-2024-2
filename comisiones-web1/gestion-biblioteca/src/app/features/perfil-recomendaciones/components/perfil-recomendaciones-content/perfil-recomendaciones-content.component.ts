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
  selector: "app-perfil-recomendaciones-content",
  templateUrl: "./perfil-recomendaciones-content.component.html",
  styleUrl: "./perfil-recomendaciones-content.component.scss",
})
export class PerfilRecomendacionesContentComponent implements OnInit {
  libros: Libro[] = [];
  editMode: boolean = false;

  ngOnInit(): void {
    this.libros = librosData; // Carga los libros desde el JSON
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }


}
