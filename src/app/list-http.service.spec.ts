import { TestBed, inject } from '@angular/core/testing';

import { ListHttpService } from './list-http.service';

describe('ListHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListHttpService]
    });
  });

  it('should be created', inject([ListHttpService], (service: ListHttpService) => {
    expect(service).toBeTruthy();
  }));
});
