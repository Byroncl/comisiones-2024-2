import { Component, OnInit } from "@angular/core";
import administradorData from "../../models/administrador.json";

interface Servicio {
  id: number;
  servicio: string;
  fecha: string;
  hora: string;
  cupos: number;
  estado: string;
}

@Component({
  selector: "app-administrador",
  templateUrl: "./administrador.component.html",
  styleUrls: ["./administrador.component.scss"],
})
export class AdministradorComponent implements OnInit {
  servicios: Servicio[] = [];
  filteredServicios: Servicio[] = [];
  searchQuery: string = "";

  ngOnInit(): void {
    // Carga los datos desde el JSON
    this.servicios = administradorData;
    this.filteredServicios = [...this.servicios];
  }

  filterServicios() {
    this.filteredServicios = this.servicios.filter((servicio) =>
      servicio.servicio.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  eliminarServicio(id: number) {
    this.servicios = this.servicios.filter((servicio) => servicio.id !== id);
    this.filterServicios(); // Actualiza el filtro
  }

  editarServicio(servicio: Servicio) {
    // Aquí podrías agregar lógica para abrir un formulario de edición
    alert(`Editando servicio: ${servicio.servicio}`);
  }

  crearServicio() {
    // Aquí podrías agregar lógica para crear un nuevo servicio
    alert("Creando nuevo servicio");
  }
}
