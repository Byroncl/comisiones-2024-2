import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioComponent } from './perfil-servicio.component';

describe('PerfilServicioComponent', () => {
  let component: PerfilServicioComponent;
  let fixture: ComponentFixture<PerfilServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
