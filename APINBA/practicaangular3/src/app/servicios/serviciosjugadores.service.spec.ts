import { TestBed } from '@angular/core/testing';

import { ServiciosjugadoresService } from './serviciosjugadores.service';

describe('ServiciosjugadoresService', () => {
  let service: ServiciosjugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosjugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
