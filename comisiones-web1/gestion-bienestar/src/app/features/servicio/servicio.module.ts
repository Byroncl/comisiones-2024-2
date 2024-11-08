import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { ServicioRoutingModule } from "./servicio-routing.module";
import { ServicioComponent } from "./pages/servicio/servicio.component";
import { ServicioContentComponent } from "./components/servicio-content/servicio-content.component";
import { ServicioNavbarComponent } from "./components/servicio-navbar/servicio-navbar.component";
import { ServicioFooterComponent } from "./components/servicio-footer/servicio-footer.component";

@NgModule({
  declarations: [
    ServicioComponent,
    ServicioContentComponent,
    ServicioNavbarComponent,
    ServicioFooterComponent,
  ],
  imports: [CommonModule, NgbModule, ServicioRoutingModule, NgbAccordionModule],
})
export class ServicioModule {}
