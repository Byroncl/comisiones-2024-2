import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioSideBarComponent } from './inventario-side-bar.component';

describe('InventarioSideBarComponent', () => {
  let component: InventarioSideBarComponent;
  let fixture: ComponentFixture<InventarioSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
