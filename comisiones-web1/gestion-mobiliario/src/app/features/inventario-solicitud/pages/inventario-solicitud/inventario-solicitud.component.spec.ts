import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSolicitudComponent } from './inventario-solicitud.component';

describe('InventarioSolicitudComponent', () => {
  let component: InventarioSolicitudComponent;
  let fixture: ComponentFixture<InventarioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
