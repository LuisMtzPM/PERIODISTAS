import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionComiteComponent } from './asignacion-comite.component';

describe('AsignacionComiteComponent', () => {
  let component: AsignacionComiteComponent;
  let fixture: ComponentFixture<AsignacionComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
