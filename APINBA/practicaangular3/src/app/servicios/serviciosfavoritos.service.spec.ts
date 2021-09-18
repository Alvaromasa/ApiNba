import { TestBed } from '@angular/core/testing';

import { ServiciosfavoritosService } from './serviciosfavoritos.service';

describe('ServiciosfavoritosService', () => {
  let service: ServiciosfavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosfavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
