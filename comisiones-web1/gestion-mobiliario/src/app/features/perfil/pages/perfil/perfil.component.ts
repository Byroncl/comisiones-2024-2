import { Component, OnInit, ViewChild } from "@angular/core";
import { PerfilTableComponent } from "../../components/perfil-table/perfil-table.component";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrl: "./perfil.component.scss",
})
export class PerfilComponent implements OnInit {
  @ViewChild(PerfilTableComponent)
  tabla!: PerfilTableComponent;

  constructor() {}

  ngOnInit() {}

  aplicarFiltro(criterio: any) {
    this.tabla.aplicarFiltro(criterio);
  }
}
