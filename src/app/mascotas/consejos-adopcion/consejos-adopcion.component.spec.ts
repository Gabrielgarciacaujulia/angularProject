import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosAdopcionComponent } from './consejos-adopcion.component';

describe('ConsejosAdopcionComponent', () => {
  let component: ConsejosAdopcionComponent;
  let fixture: ComponentFixture<ConsejosAdopcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejosAdopcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
