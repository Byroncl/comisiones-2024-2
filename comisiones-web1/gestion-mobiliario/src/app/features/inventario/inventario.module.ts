import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { InventarioComponent } from "./pages/inventario/inventario.component";
import { InventarioTableComponent } from "./components/inventario-table/inventario-table.component";
import { InventarioFilterFormComponent } from "./components/inventario-filter-form/inventario-filter-form.component";
import { InventarioRoutingModule } from "./inventario-routing.module";
import { InventarioFormModalComponent } from "./components/inventario-form-modal/inventario-form-modal.component";
import { InventarioSideBarComponent } from "./components/inventario-side-bar/inventario-side-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    InventarioComponent,
    InventarioTableComponent,
    InventarioFilterFormComponent,
    InventarioFormModalComponent,
    InventarioSideBarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule, // Este módulo importa ng-bootstrap
    InventarioRoutingModule,
    NgbAccordionModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class InventarioModule {}
