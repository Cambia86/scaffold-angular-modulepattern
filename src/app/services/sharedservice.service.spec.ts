import { TestBed, inject } from '@angular/core/testing';

import { SharedserviceService } from './sharedservice.service';

describe('SharedserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedserviceService]
    });
  });

  it('should be created', inject([SharedserviceService], (service: SharedserviceService) => {
    expect(service).toBeTruthy();
  }));
});
