import { Component, OnInit, Input } from "@angular/core";
import Swal from "sweetalert2";
import solicitudesData from "../../models/solicitudes.json"

@Component({
  selector: "app-perfil-solicitudes-table",
  templateUrl: "./perfil-solicitudes-table.component.html",
  styleUrl: "./perfil-solicitudes-table.component.scss",
})
export class PerfilSolicitudesTableComponent implements OnInit {
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
      title: "Estado de la solicitud",
      text: `¿Deseas activar o cancelar la solicitud  "${solicitud.mueble_solicitado}" con el estado "${solicitud.estado}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
    }).then((result) => {
      if (result.isConfirmed) {
        solicitud.estado = "activa";
        Swal.fire("Exito", "La solicitud ha sido activada", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        solicitud.estado = "cancelado";
        Swal.fire("Cancelado", "La solicitud ha sido cancelada.", "error");
      }
    });
  }

  aplicarFiltro(criterio: any) {
    this.solicitudesFiltradas = this.solicitudes.filter((item) => {
      const mueble_solicitadoMatch = criterio.mueble_solicitado
        ? item.mueble_solicitado.includes(criterio.mueble_solicitado)
        : true;
      return mueble_solicitadoMatch;
    });
  }
}
