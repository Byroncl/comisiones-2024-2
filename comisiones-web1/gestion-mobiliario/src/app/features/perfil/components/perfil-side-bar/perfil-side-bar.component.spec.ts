import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSideBarComponent } from './perfil-side-bar.component';

describe('PerfilSideBarComponent', () => {
  let component: PerfilSideBarComponent;
  let fixture: ComponentFixture<PerfilSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
