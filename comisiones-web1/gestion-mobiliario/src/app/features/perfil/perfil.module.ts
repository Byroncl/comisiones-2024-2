import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { PerfilComponent } from "./pages/perfil/perfil.component";
import { PerfilSideBarComponent } from "./components/perfil-side-bar/perfil-side-bar.component";
import { PerfilTableComponent } from "./components/perfil-table/perfil-table.component";
import { PerfilFiltroComponent } from "./components/perfil-filtro/perfil-filtro.component";
import { PerfilRoutingModule } from "./perfil-routing.module";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilSideBarComponent,
    PerfilTableComponent,
    PerfilFiltroComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    PerfilRoutingModule,
    NgbAccordionModule,
    FormsModule,
  ],
})
export class PerfilModule {}
