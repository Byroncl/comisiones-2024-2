import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFiltroComponent } from './perfil-filtro.component';

describe('PerfilFiltroComponent', () => {
  let component: PerfilFiltroComponent;
  let fixture: ComponentFixture<PerfilFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
