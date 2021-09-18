import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxrebotesComponent } from './maxrebotes.component';

describe('MaxrebotesComponent', () => {
  let component: MaxrebotesComponent;
  let fixture: ComponentFixture<MaxrebotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxrebotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxrebotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
