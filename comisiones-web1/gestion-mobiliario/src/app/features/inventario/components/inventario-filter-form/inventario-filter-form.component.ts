import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Collapse } from "bootstrap";

@Component({
  selector: "app-inventario-filter-form",
  templateUrl: "./inventario-filter-form.component.html",
  styleUrls: ["./inventario-filter-form.component.scss"],
})
export class InventarioFilterFormComponent implements OnInit {
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
