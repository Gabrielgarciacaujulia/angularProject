import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAgregarComponent } from './mascota-agregar.component';

describe('MascotaAgregarComponent', () => {
  let component: MascotaAgregarComponent;
  let fixture: ComponentFixture<MascotaAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
