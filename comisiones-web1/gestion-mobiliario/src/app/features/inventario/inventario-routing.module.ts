import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { InventarioComponent } from "./pages/inventario/inventario.component";

const routes: Routes = [{ path: "", component: InventarioComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
