import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilSolicitudesComponent } from "./pages/perfil-solicitudes/perfil-solicitudes.component";
import { PerfilSolicitudesSideBarComponent } from "./components/perfil-solicitudes-side-bar/perfil-solicitudes-side-bar.component";
import { PerfilSolicitudesTableComponent } from "./components/perfil-solicitudes-table/perfil-solicitudes-table.component";
import { PerfilSolicitudesFiltroComponent } from "./components/perfil-solicitudes-filtro/perfil-solicitudes-filtro.component";
import { PerfilSolicitudesRoutingModule } from "./perfil-solicitudes-routing.module";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PerfilSolicitudesComponent,
    PerfilSolicitudesSideBarComponent,
    PerfilSolicitudesTableComponent,
    PerfilSolicitudesFiltroComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfilSolicitudesRoutingModule,
    NgbAccordionModule,
    FormsModule,
  ],
})
export class PerfilSolicitudesModule {}
