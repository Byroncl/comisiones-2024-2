import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PerfilSolicitudesComponent } from "./pages/perfil-solicitudes/perfil-solicitudes.component";

const routes: Routes = [{ path: "", component: PerfilSolicitudesComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilSolicitudesRoutingModule {}
