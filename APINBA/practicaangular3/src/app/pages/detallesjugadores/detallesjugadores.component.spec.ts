import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesjugadoresComponent } from './detallesjugadores.component';

describe('DetallesjugadoresComponent', () => {
  let component: DetallesjugadoresComponent;
  let fixture: ComponentFixture<DetallesjugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesjugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
