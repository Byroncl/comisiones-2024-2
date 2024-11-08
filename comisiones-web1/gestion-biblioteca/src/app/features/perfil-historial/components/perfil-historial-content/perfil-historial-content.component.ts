import usuarioData from "../../models/usuario.json";
import notificacionesData from "../../models/notificaciones.json";
import historialData from "../../models/historial.json";
import { Component, OnInit } from "@angular/core";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  facultad: string;
  carrera: string;
  semestre: number;
  telefono: string;
  foto: string;
}

interface Notificacion {
  id: number;
  titulo: string;
  descripcion: string;
}

interface Historial {
  id: number;
  busqueda: string;
  fecha: string;
}

@Component({
  selector: "app-perfil-historial-content",
  templateUrl: "./perfil-historial-content.component.html",
  styleUrls: ["./perfil-historial-content.component.scss"],
})
export class PerfilHistorialContentComponent implements OnInit {
  menuVisible = false;
  notificationsVisible = false;
  usuario: Usuario | undefined;
  notificaciones: Notificacion[] = [];
  historial: Historial[] = [];

  ngOnInit() {
    this.usuario = usuarioData[0];
    this.notificaciones = notificacionesData;
    this.historial = historialData;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  toggleNotifications() {
    this.notificationsVisible = !this.notificationsVisible;
  }

  toggleSearch() {
    // Lógica para mostrar u ocultar la búsqueda
  }
}
