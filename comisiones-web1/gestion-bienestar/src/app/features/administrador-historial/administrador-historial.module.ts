import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { AdministradorHistorialRoutingModule } from "./administrador-historial-routing.module";
import { AdministradorHistorialComponent } from "./pages/administrador-historial/administrador-historial.component";

@NgModule({
  declarations: [AdministradorHistorialComponent],
  imports: [CommonModule, NgbModule, AdministradorHistorialRoutingModule, NgbAccordionModule, FormsModule],
})
export class AdministradorHistorialModule {}
