import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxasistentesComponent } from './maxasistentes.component';

describe('MaxasistentesComponent', () => {
  let component: MaxasistentesComponent;
  let fixture: ComponentFixture<MaxasistentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxasistentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxasistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
