import { Component, OnInit } from "@angular/core";
import historialData from "../../models/historial.json";

interface Historial {
  id: number;
  fecha: string;
  hora: string;
  servicio: string;
  especialista?: string;
  grupo?: string;
  estado: string;
}

@Component({
  selector: "app-perfil-historial",
  templateUrl: "./perfil-historial.component.html",
  styleUrls: ["./perfil-historial.component.scss"],
})
export class PerfilHistorialComponent implements OnInit {
  historial: Historial[] = [];

  ngOnInit(): void {
    // Carga los datos del JSON
    this.historial = historialData;
  }
}
