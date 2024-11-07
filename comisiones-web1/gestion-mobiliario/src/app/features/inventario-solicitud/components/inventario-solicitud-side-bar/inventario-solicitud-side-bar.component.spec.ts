import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSolicitudSideBarComponent } from './inventario-solicitud-side-bar.component';

describe('InventarioSolicitudSideBarComponent', () => {
  let component: InventarioSolicitudSideBarComponent;
  let fixture: ComponentFixture<InventarioSolicitudSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioSolicitudSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioSolicitudSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
