import { Component, OnInit } from '@angular/core';
import inventarioData from "../../models/inventario.json";

@Component({
  selector: "app-inventario-table",
  templateUrl: "./inventario-table.component.html",
  styleUrls: ["./inventario-table.component.scss"],
})
export class InventarioTableComponent implements OnInit {
  inventario: any[] = [];
  inventarioFiltrado: any[] = [];
  constructor() {}

  ngOnInit() {
    this.inventario = inventarioData;
    this.inventarioFiltrado = [...this.inventario];
  }

  aplicarFiltro(criterio: any) {
    this.inventarioFiltrado = this.inventario.filter((item) => {
      return Object.keys(criterio).every((key) => {
        return criterio[key]
          ? item[key].toString().includes(criterio[key])
          : true;
      });
    });
  }

  agregarItem(nuevoItem: any) {
    this.inventario.push(nuevoItem);
    this.inventarioFiltrado = [...this.inventario];
  }
}
