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
  selector: "app-administrador-libros-table",
  templateUrl: "./administrador-libros-table.component.html",
  styleUrls: ["./administrador-libros-table.component.scss"],
})
export class AdministradorLibrosTableComponent implements OnInit {
  libros: Libro[] = [];
  librosFiltrados: Libro[] = [];
  filtro: any = {};
  nuevoLibro: Libro = {
    id: 0,
    titulo: "",
    autor: "",
    descripcion: "",
    imagen: "",
  };
  libroEditando: Libro | null = null;

  ngOnInit() {
    this.libros = librosData;
    this.librosFiltrados = [...this.libros];
  }

  agregarLibro() {
    const nuevoId = Math.max(...this.libros.map((libro) => libro.id)) + 1;
    this.nuevoLibro.id = nuevoId;
    this.libros.push({ ...this.nuevoLibro });
    this.nuevoLibro = {
      id: 0,
      titulo: "",
      autor: "",
      descripcion: "",
      imagen: "",
    };
  }

  aplicarFiltro(criterio: any) {
    this.librosFiltrados = this.libros.filter((libro) => {
      return Object.keys(criterio).every((key) => {
        return criterio[key]
          ? (libro[key as keyof Libro] as string).toLowerCase().includes((criterio[key] as string).toLowerCase())
          : true;
      });
    });
  }

  editarLibro(libro: Libro) {
    this.libroEditando = { ...libro };
  }

  guardarEdicion() {
    if (this.libroEditando) {
      const index = this.libros.findIndex(
        (libro) => libro.id === this.libroEditando!.id
      );
      if (index > -1) {
        this.libros[index] = { ...this.libroEditando };
        this.libroEditando = null;
      }
    }
  }

  cancelarEdicion() {
    this.libroEditando = null;
  }

  eliminarLibro(id: number) {
    this.libros = this.libros.filter((libro) => libro.id !== id);
  }
}
