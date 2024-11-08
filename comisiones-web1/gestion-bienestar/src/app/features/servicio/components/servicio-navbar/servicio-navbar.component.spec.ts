import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNavbarComponent } from './servicio-navbar.component';

describe('ServicioNavbarComponent', () => {
  let component: ServicioNavbarComponent;
  let fixture: ComponentFixture<ServicioNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
