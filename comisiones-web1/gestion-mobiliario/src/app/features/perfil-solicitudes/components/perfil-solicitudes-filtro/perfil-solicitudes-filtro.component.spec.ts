import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSolicitudesFiltroComponent } from './perfil-solicitudes-filtro.component';

describe('PerfilSolicitudesFiltroComponent', () => {
  let component: PerfilSolicitudesFiltroComponent;
  let fixture: ComponentFixture<PerfilSolicitudesFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSolicitudesFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSolicitudesFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
