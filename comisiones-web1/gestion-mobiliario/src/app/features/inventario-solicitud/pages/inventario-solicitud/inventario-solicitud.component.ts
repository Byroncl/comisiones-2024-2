import { Component, OnInit, ViewChild } from "@angular/core";
import { InventarioSolicitudTableComponent } from "../../components/inventario-solicitud-table/inventario-solicitud-table.component";

@Component({
  selector: "app-inventario-solicitud",
  templateUrl: "./inventario-solicitud.component.html",
  styleUrl: "./inventario-solicitud.component.scss",
})
export class InventarioSolicitudComponent implements OnInit {
  @ViewChild(InventarioSolicitudTableComponent) tabla!: InventarioSolicitudTableComponent;



  constructor() {}

  ngOnInit() {}

  aplicarFiltro(criterio: any) {
    this.tabla.aplicarFiltro(criterio);
  }

  
}
