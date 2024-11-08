import { Component, OnInit } from "@angular/core";
import serviciosData from "../../models/servicio.json";

interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  cupos: number;
  img: string;
}

@Component({
  selector: "app-servicio-content",
  templateUrl: "./servicio-content.component.html",
  styleUrls: ["./servicio-content.component.scss"],
})
export class ServicioContentComponent implements OnInit {
  servicios: Servicio[] = [];

  ngOnInit(): void {
    // Carga los datos directamente desde el JSON importado
    this.servicios = serviciosData;
  }
}
