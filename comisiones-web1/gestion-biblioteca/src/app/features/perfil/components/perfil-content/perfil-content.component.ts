import { Component, OnInit } from "@angular/core";
import usuarioData from "../../models/usuario.json";
import librosData from "../../models/libros.json";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  facultad: string;
  carrera: string;
  semestre: number;
  telefono: string;
}

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: "app-perfil-content",
  templateUrl: "./perfil-content.component.html",
  styleUrls: ["./perfil-content.component.scss"],
})
export class PerfilContentComponent implements OnInit {
  usuario: Usuario | undefined;
  libros: Libro[] = [];
  editMode: boolean = false;

  ngOnInit(): void {
    this.usuario = { ...usuarioData[0] }; // Clona los datos del usuario
    this.libros = librosData; // Carga los libros desde el JSON
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    console.log("Datos guardados:", this.usuario);
    this.editMode = false; // Salir del modo de edición
  }
}
