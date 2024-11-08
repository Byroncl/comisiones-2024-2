import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioNavbarComponent } from './perfil-servicio-navbar.component';

describe('PerfilServicioNavbarComponent', () => {
  let component: PerfilServicioNavbarComponent;
  let fixture: ComponentFixture<PerfilServicioNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilServicioNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilServicioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
