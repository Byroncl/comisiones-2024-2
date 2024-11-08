import { Component, OnInit } from "@angular/core";
import usuarioData from "../../models/usuario.json";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  facultad: string;
  carrera: string;
  semestre: number;
  telefono: string;
}

@Component({
  selector: "app-perfil-content",
  templateUrl: "./perfil-content.component.html",
  styleUrls: ["./perfil-content.component.scss"],
})
export class PerfilContentComponent implements OnInit {
  usuario: Usuario | undefined;
  editMode: boolean = false;

  ngOnInit(): void {
    // Carga los datos directamente desde el JSON importado
    this.usuario = { ...usuarioData[0] }; // Clona los datos del usuario
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Aquí puedes implementar la lógica para guardar los cambios, por ejemplo, enviarlos a un backend
    console.log("Datos guardados:", this.usuario);
    this.editMode = false; // Salir del modo de edición
  }
}
