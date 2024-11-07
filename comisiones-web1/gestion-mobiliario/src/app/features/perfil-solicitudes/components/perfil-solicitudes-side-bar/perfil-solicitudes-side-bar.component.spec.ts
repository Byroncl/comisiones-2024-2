import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSolicitudesSideBarComponent } from './perfil-solicitudes-side-bar.component';

describe('PerfilSolicitudesSideBarComponent', () => {
  let component: PerfilSolicitudesSideBarComponent;
  let fixture: ComponentFixture<PerfilSolicitudesSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSolicitudesSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSolicitudesSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
