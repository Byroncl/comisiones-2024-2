import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilHistorialComponent } from "./pages/perfil-historial/perfil-historial.component";
import { PerfilHistorialRoutingModule } from "./perfil-historial-routing.module";


@NgModule({
  declarations: [PerfilHistorialComponent],
  imports: [
    CommonModule,
    NgbModule,
    PerfilHistorialRoutingModule,
    NgbAccordionModule,
  ],
})
export class PerfilHistorialModule {}
