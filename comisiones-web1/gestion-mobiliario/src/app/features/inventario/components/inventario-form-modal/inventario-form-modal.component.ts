import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-inventario-form-modal",
  templateUrl: "./inventario-form-modal.component.html",
  styleUrls: ["./inventario-form-modal.component.scss"],
})
export class InventarioFormModalComponent implements OnInit {
  nuevoItem: any = {
    id: null,
    nombre: "",
    descripcion: "",
    cantidad: null,
    estado: "",
    fecha_adquisicion: "",
    facultad: "",
    responsable: "",
  };

  @Output() itemAgregado = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  agregarItem() {
    this.nuevoItem.id = Math.floor(Math.random() * 1000); // Asigna un ID único temporal
    this.itemAgregado.emit(this.nuevoItem);
    // Reinicializar nuevoItem con propiedades vacías
    this.nuevoItem = {
      id: null,
      nombre: "",
      descripcion: "",
      cantidad: null,
      estado: "",
      fecha_adquisicion: "",
      facultad: "",
      responsable: "",
    };
  }
}
