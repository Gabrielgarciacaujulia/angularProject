import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasListarComponent } from './mascotas-listar.component';

describe('MascotasListarComponent', () => {
  let component: MascotasListarComponent;
  let fixture: ComponentFixture<MascotasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
