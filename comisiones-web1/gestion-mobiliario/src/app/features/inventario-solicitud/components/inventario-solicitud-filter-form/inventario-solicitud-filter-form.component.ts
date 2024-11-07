import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Collapse } from "bootstrap";

@Component({
  selector: "app-inventario-solicitud-filter-form",
  templateUrl: "./inventario-solicitud-filter-form.component.html",
  styleUrl: "./inventario-solicitud-filter-form.component.scss",
})
export class InventarioSolicitudFilterFormComponent implements OnInit {
  criterio: any = {};
  @Output() filtroAplicado = new EventEmitter<any>();

  aplicarFiltro() {
    this.filtroAplicado.emit(this.criterio);
  }

  constructor() {}

  ngOnInit() {
    const collapseElements = document.querySelectorAll(".accordion-collapse");
    collapseElements.forEach((collapseElement) => {
      new Collapse(collapseElement);
    });
  }
}