import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSolicitudesTableComponent } from './perfil-solicitudes-table.component';

describe('PerfilSolicitudesTableComponent', () => {
  let component: PerfilSolicitudesTableComponent;
  let fixture: ComponentFixture<PerfilSolicitudesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSolicitudesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSolicitudesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
