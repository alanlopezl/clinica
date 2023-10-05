import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEditComponent } from './paciente-edit.component';

describe('PacienteEditComponent', () => {
  let component: PacienteEditComponent;
  let fixture: ComponentFixture<PacienteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteEditComponent]
    });
    fixture = TestBed.createComponent(PacienteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
