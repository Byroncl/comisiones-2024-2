import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AdministradorRoutingModule } from "./administrador-routing.module";
import { AdministradorComponent } from "./pages/administrador/administrador.component";

@NgModule({
  declarations: [AdministradorComponent],
  imports: [CommonModule, NgbModule, AdministradorRoutingModule, NgbAccordionModule, FormsModule],
})
export class AdministradorModule {}
