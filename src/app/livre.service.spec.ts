import { TestBed } from '@angular/core/testing';

import { LivreService } from './service/livre.service';

describe('LivreService', () => {
  let service: LivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
