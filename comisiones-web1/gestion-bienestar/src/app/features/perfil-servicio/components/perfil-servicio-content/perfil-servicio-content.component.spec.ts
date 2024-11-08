import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioContentComponent } from './perfil-servicio-content.component';

describe('PerfilServicioContentComponent', () => {
  let component: PerfilServicioContentComponent;
  let fixture: ComponentFixture<PerfilServicioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilServicioContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilServicioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
