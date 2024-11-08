import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHistorialFooterComponent } from './perfil-historial-footer.component';

describe('PerfilHistorialFooterComponent', () => {
  let component: PerfilHistorialFooterComponent;
  let fixture: ComponentFixture<PerfilHistorialFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilHistorialFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilHistorialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
