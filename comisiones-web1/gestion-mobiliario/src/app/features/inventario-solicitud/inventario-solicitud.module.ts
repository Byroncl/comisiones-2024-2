import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { InventarioSolicitudComponent } from "./pages/inventario-solicitud/inventario-solicitud.component";
import { InventarioSolicitudRoutingModule } from "./inventario-solicitud-routing.module";
import { InventarioSolicitudFilterFormComponent } from "./components/inventario-solicitud-filter-form/inventario-solicitud-filter-form.component";
import { InventarioSolicitudTableComponent } from "./components/inventario-solicitud-table/inventario-solicitud-table.component";
import { InventarioSolicitudSideBarComponent } from "./components/inventario-solicitud-side-bar/inventario-solicitud-side-bar.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    InventarioSolicitudComponent,
    InventarioSolicitudFilterFormComponent,
    InventarioSolicitudTableComponent,
    InventarioSolicitudSideBarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    InventarioSolicitudRoutingModule,
    NgbAccordionModule,
    FormsModule,
  ],
})
export class InventarioSolicitudModule {}
