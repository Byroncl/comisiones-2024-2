import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolModalFormComponent } from './rol-modal-form.component';

describe('RolModalFormComponent', () => {
  let component: RolModalFormComponent;
  let fixture: ComponentFixture<RolModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolModalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
