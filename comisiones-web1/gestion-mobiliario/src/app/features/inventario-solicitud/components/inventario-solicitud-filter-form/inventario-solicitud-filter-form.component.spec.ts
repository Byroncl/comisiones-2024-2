import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSolicitudFilterFormComponent } from './inventario-solicitud-filter-form.component';

describe('InventarioSolicitudFilterFormComponent', () => {
  let component: InventarioSolicitudFilterFormComponent;
  let fixture: ComponentFixture<InventarioSolicitudFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioSolicitudFilterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioSolicitudFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
