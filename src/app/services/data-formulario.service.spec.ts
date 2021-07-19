import { TestBed } from '@angular/core/testing';

import { DataFormularioService } from './data-formulario.service';

describe('DataFormularioService', () => {
  let service: DataFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
