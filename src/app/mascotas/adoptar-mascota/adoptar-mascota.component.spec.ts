import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptarMascotaComponent } from './adoptar-mascota.component';

describe('AdoptarMascotaComponent', () => {
  let component: AdoptarMascotaComponent;
  let fixture: ComponentFixture<AdoptarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
