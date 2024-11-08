import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioFooterComponent } from './perfil-servicio-footer.component';

describe('PerfilServicioFooterComponent', () => {
  let component: PerfilServicioFooterComponent;
  let fixture: ComponentFixture<PerfilServicioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilServicioFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilServicioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
