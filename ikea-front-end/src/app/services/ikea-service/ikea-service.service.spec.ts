import { TestBed } from '@angular/core/testing';

import { IkeaService } from './ikea-service.service';

describe('IkeaService', () => {
  let service: IkeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IkeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
