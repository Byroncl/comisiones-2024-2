import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

import { RolComponent } from "./pages/rol/rol.component";
import { RolModalFormComponent } from "./components/rol-modal-form/rol-modal-form.component";
import { RolTableComponent } from "./components/rol-table/rol-table.component";
import { RolRoutingModule } from './rol-routing.module';

@NgModule({
  declarations: [
    RolComponent,
    RolModalFormComponent,
    RolTableComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RolRoutingModule,
    NgbAccordionModule
  ],
})
export class RolModule {}
