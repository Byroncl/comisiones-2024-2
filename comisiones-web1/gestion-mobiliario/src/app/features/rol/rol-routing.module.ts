import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RolComponent } from "./pages/rol/rol.component";
const routes: Routes = [{ path: "", component: RolComponent }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolRoutingModule {}
