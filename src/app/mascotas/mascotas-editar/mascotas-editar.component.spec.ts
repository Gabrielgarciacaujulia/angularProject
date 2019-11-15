import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasEditarComponent } from './mascotas-editar.component';

describe('MascotasEditarComponent', () => {
  let component: MascotasEditarComponent;
  let fixture: ComponentFixture<MascotasEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
