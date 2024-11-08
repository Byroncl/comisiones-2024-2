import { Component } from "@angular/core";
import { AuthService } from "../../../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
})
export class LoginFormComponent {
  correo: string = "";
  contrasena: string = "";
  mensaje: string = "";
  mensajeTipo: string = ""; // 'success' o 'error'

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Limpiar mensaje anterior
    this.mensaje = "";
    this.mensajeTipo = "";

    // Procesar el login inmediatamente
    const rol = this.authService.login(this.correo, this.contrasena);

    if (rol) {
      // Mostrar el mensaje de éxito con el rol del usuario
      this.mensaje = `Inicio de sesión exitoso como ${rol}`;
      this.mensajeTipo = "success";

      // Esperar 5 segundos antes de redirigir
      setTimeout(() => {
        if (rol === "administrador") {
          this.router.navigate(["/administrador"]);
        } else if (rol === "usuario") {
          this.router.navigate(["/perfil"]);
        }
      }, 2000); // 5 segundos de delay
    } else {
      // Mostrar mensaje de error sin redirigir
      this.mensaje = "Correo o contraseña incorrectos";
      this.mensajeTipo = "error";
    }
  }
}
