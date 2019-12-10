import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoServiceComponent } from './empleado-service.component';

describe('EmpleadoServiceComponent', () => {
  let component: EmpleadoServiceComponent;
  let fixture: ComponentFixture<EmpleadoServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
