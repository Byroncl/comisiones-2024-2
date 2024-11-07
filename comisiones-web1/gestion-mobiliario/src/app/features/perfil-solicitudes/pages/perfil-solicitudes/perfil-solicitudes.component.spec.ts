import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSolicitudesComponent } from './perfil-solicitudes.component';

describe('PerfilSolicitudesComponent', () => {
  let component: PerfilSolicitudesComponent;
  let fixture: ComponentFixture<PerfilSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSolicitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
