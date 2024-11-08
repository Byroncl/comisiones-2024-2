import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioFiltroComponent } from './perfil-servicio-filtro.component';

describe('PerfilServicioFiltroComponent', () => {
  let component: PerfilServicioFiltroComponent;
  let fixture: ComponentFixture<PerfilServicioFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilServicioFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilServicioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
