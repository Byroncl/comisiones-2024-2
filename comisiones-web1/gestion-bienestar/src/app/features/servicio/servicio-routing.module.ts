import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ServicioComponent } from "./pages/servicio/servicio.component";

const routes: Routes = [{ path: "", component: ServicioComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioRoutingModule {}
