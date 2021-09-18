import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadojugadoresComponent } from './listadojugadores.component';

describe('ListadojugadoresComponent', () => {
  let component: ListadojugadoresComponent;
  let fixture: ComponentFixture<ListadojugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadojugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadojugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
