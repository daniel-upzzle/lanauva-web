import { TestBed, inject } from '@angular/core/testing';

import { LanauvaApiService } from './lanauva-api.service';

describe('LanauvaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanauvaApiService]
    });
  });

  it('should ...', inject([LanauvaApiService], (service: LanauvaApiService) => {
    expect(service).toBeTruthy();
  }));
});
