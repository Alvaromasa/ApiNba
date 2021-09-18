import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxanotadoresComponent } from './maxanotadores.component';

describe('MaxanotadoresComponent', () => {
  let component: MaxanotadoresComponent;
  let fixture: ComponentFixture<MaxanotadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxanotadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxanotadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
