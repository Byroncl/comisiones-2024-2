import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AdministradorHistorialComponent } from "./pages/administrador-historial/administrador-historial.component";

const routes: Routes = [{ path: "", component: AdministradorHistorialComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorHistorialRoutingModule {}
