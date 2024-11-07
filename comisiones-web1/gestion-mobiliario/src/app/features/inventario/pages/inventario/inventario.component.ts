import { Component, OnInit, ViewChild } from "@angular/core";
import { InventarioTableComponent } from "../../components/inventario-table/inventario-table.component";

@Component({
  selector: "app-inventario",
  templateUrl: "./inventario.component.html",
  styleUrls: ["./inventario.component.scss"],
})
export class InventarioComponent implements OnInit {

  @ViewChild(InventarioTableComponent) tabla!: InventarioTableComponent;

  mostrarModal: boolean = false;
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

  constructor() {}

  ngOnInit() {}

  aplicarFiltro(criterio: any) {
    this.tabla.aplicarFiltro(criterio);
  }

  agregarItem() {
    this.nuevoItem.id = Math.floor(Math.random() * 1000); // Asigna un ID único temporal
    this.tabla.agregarItem(this.nuevoItem);
    this.cerrarModal(); // Cierra el modal después de agregar
  }
  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    // Reinicializar nuevoItem con propiedades vacías para limpiar el formulario
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
