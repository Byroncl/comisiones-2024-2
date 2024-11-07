import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSolicitudTableComponent } from './inventario-solicitud-table.component';

describe('InventarioSolicitudTableComponent', () => {
  let component: InventarioSolicitudTableComponent;
  let fixture: ComponentFixture<InventarioSolicitudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioSolicitudTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioSolicitudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
