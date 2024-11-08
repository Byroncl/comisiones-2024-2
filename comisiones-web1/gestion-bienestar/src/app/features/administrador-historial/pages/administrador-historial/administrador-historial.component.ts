import { Component, OnInit } from "@angular/core";
import historialSolicitudesData from "../../models/historial-solicitudes.json";

interface Solicitud {
  id: number;
  servicio: string;
  usuario: string;
  fecha: string;
  hora: string;
  estado: string;
}

@Component({
  selector: "app-administrador-historial",
  templateUrl: "./administrador-historial.component.html",
  styleUrls: ["./administrador-historial.component.scss"],
})
export class AdministradorHistorialComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  filteredSolicitudes: Solicitud[] = [];
  searchQuery: string = "";

  ngOnInit(): void {
    // Cargar los datos desde el JSON
    this.solicitudes = historialSolicitudesData;
    this.filteredSolicitudes = [...this.solicitudes];
  }

  filterSolicitudes() {
    this.filteredSolicitudes = this.solicitudes.filter(
      (solicitud) =>
        solicitud.servicio
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
        solicitud.usuario.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  cambiarEstado(solicitud: Solicitud, nuevoEstado: string) {
    solicitud.estado = nuevoEstado;
  }
}
