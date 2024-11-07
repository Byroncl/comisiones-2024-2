import { Component, OnInit, ViewChild } from "@angular/core";
import { PerfilSolicitudesTableComponent } from "../../components/perfil-solicitudes-table/perfil-solicitudes-table.component";

@Component({
  selector: "app-perfil-solicitudes",
  templateUrl: "./perfil-solicitudes.component.html",
  styleUrl: "./perfil-solicitudes.component.scss",
})
export class PerfilSolicitudesComponent implements OnInit {
  @ViewChild(PerfilSolicitudesTableComponent)
  tabla!: PerfilSolicitudesTableComponent;

  constructor() {}

  ngOnInit() {}

  aplicarFiltro(criterio: any) {
    this.tabla.aplicarFiltro(criterio);
  }
}
