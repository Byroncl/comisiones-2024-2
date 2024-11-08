import usuarioData from "../../models/usuario.json";
import notificacionesData from "../../models/notificaciones.json";
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
@Component({
  selector: "app-perfil-historial-navbar",
  templateUrl: "./perfil-historial-navbar.component.html",
  styleUrl: "./perfil-historial-navbar.component.scss",
})
export class PerfilHistorialNavbarComponent implements OnInit {
  menuVisible = false;
  notificationsVisible = false;
  usuario: Usuario | undefined;
  notificaciones: Notificacion[] = [];

  ngOnInit() {
    // Cargar los datos del usuario y las notificaciones del archivo JSON
    this.usuario = usuarioData[0];
    this.notificaciones = notificacionesData;
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
