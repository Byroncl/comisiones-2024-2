import { Component } from "@angular/core";

@Component({
  selector: "app-home-content",
  templateUrl: "./home-content.component.html",
  styleUrls: ["./home-content.component.scss"],
})
export class HomeContentComponent {
  // Variables para la alerta
  alertType: "success" | "info" | "warning" | "error" | "secondary" | "" = "";
  alertTitle: string = "";
  alertMessage: string = "";

  learnMore(topic: string): void {
    switch (topic) {
      case "salud":
        this.alertType = "success";
        this.alertTitle = "Bienestar de Salud";
        this.alertMessage =
          "Explora hábitos de vida saludables, ejercicio regular y una dieta equilibrada para mejorar tu salud.";
        break;
      case "psicologicos":
        this.alertType = "info";
        this.alertTitle = "Aspectos Psicológicos";
        this.alertMessage =
          "Conoce técnicas de manejo del estrés, mindfulness y busca apoyo cuando lo necesites para cuidar tu salud mental.";
        break;
      case "recreativas":
        this.alertType = "warning";
        this.alertTitle = "Actividades Recreativas";
        this.alertMessage =
          "Involúcrate en deportes, arte, o hobbies que te apasionen para reducir el estrés y mejorar tu estado de ánimo.";
        break;
      case "companerismo":
        this.alertType = "secondary";
        this.alertTitle = "Compañerismo";
        this.alertMessage =
          "Fomenta el compañerismo participando en actividades colaborativas y construyendo relaciones sólidas.";
        break;
      default:
        this.alertType = "error";
        this.alertTitle = "Error";
        this.alertMessage = "Tema no encontrado.";
    }
  }

  getIconClass(type: string): string {
    switch (type) {
      case "success":
        return "fas fa-check-circle";
      case "info":
        return "fas fa-info-circle";
      case "warning":
        return "fas fa-exclamation-circle";
      case "error":
        return "fas fa-times-circle";
      default:
        return "fas fa-info-circle";
    }
  }

  closeAlert(): void {
    this.alertType = "";
  }
}
