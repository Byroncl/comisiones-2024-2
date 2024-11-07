import { Component, OnInit, Input } from "@angular/core";
import Swal from "sweetalert2";
import solicitudesData from "../../models/solicitud.json";

@Component({
  selector: "app-inventario-solicitud-table",
  templateUrl: "./inventario-solicitud-table.component.html",
  styleUrls: ["./inventario-solicitud-table.component.scss"],
})
export class InventarioSolicitudTableComponent implements OnInit {
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
      text: `¿Deseas cambiar el estado de la solicitud de "${solicitud.nombre_solicitante}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Denegar",
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
        Swal.fire("Estado cambiado", "La solicitud ha sido denegada.", "error");
      }
    });
  }

  aplicarFiltro(criterio: any) {
    this.solicitudesFiltradas = this.solicitudes.filter((item) => {
      const nombreMatch = criterio.nombre_solicitante
        ? item.nombre_solicitante.includes(criterio.nombre_solicitante)
        : true;
      const estadoMatch = criterio.estado
        ? item.estado === criterio.estado
        : true;
      return nombreMatch && estadoMatch;
    });
  }
}
