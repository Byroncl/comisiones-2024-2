import { Component, OnInit } from "@angular/core";
import usuarioData from "../../models/usuario.json";
@Component({
  selector: "app-administrador-usuario-content",
  templateUrl: "./administrador-usuario-content.component.html",
  styleUrl: "./administrador-usuario-content.component.scss",
})
export class AdministradorUsuarioContentComponent implements OnInit {
  usuario: any[] = [];
  usuarioFiltrado: any[] = [];
  constructor() {}

  ngOnInit() {
    this.usuario = usuarioData;
    this.usuarioFiltrado = [...this.usuario];
  }

  aplicarFiltro(criterio: any) {
    this.usuarioFiltrado = this.usuario.filter((item) => {
      return Object.keys(criterio).every((key) => {
        return criterio[key]
          ? item[key].toString().includes(criterio[key])
          : true;
      });
    });
  }

  agregarItem(nuevoItem: any) {
    this.usuario.push(nuevoItem);
    this.usuarioFiltrado = [...this.usuario];
  }
}
