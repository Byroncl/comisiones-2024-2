import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Collapse } from "bootstrap";

@Component({
  selector: "app-perfil-filtro",
  templateUrl: "./perfil-filtro.component.html",
  styleUrl: "./perfil-filtro.component.scss",
})
export class PerfilFiltroComponent implements OnInit {
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
