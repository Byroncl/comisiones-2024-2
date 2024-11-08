import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFooterComponent } from './servicio-footer.component';

describe('ServicioFooterComponent', () => {
  let component: ServicioFooterComponent;
  let fixture: ComponentFixture<ServicioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
