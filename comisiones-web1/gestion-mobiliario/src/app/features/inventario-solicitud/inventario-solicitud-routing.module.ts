import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { InventarioSolicitudComponent } from "./pages/inventario-solicitud/inventario-solicitud.component";

const routes: Routes = [{ path: "", component: InventarioSolicitudComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioSolicitudRoutingModule {}
