import { Component, OnInit, Input } from "@angular/core";
import Swal from "sweetalert2";
import solicitudesData from "../../models/inventario.json";

@Component({
  selector: "app-perfil-table",
  templateUrl: "./perfil-table.component.html",
  styleUrl: "./perfil-table.component.scss",
})
export class PerfilTableComponent implements OnInit {
  solicitudes: any[] = [];
  solicitudesFiltradas: any[] = [];

  @Input() set filtro(criterio: any) {
    this.aplicarFiltro(criterio);
  }
  constructor() {}
  ngOnInit() {
    // Carga los datos del JSON
    this.solicitudes = solicitudesData;
    this.solicitudesFiltradas = [...this.solicitudes]; // Inicializar con todas las solicitudes
  }

  cambiarEstado(solicitud: any) {
    Swal.fire({
      title: "Cambiar estado",
      text: `¿Deseas Solicitar  "${solicitud.nombre}" con la cantidad de "${solicitud.cantidad}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        solicitud.estado = "Aceptado";
        Swal.fire(
          "Estado cambiado",
          "La solicitud ha sido aceptada.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        solicitud.estado = "Denegado";
        Swal.fire("Cancelado", "La solicitud fue cancelada.", "error");
      }
    });
  }

  aplicarFiltro(criterio: any) {
    this.solicitudesFiltradas = this.solicitudes.filter((item) => {
      const nombreMatch = criterio.nombre
        ? item.nombre.includes(criterio.nombre)
        : true;
      return nombreMatch;
    });
  }
}
