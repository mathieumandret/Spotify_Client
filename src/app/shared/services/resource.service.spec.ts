import { TestBed } from '@angular/core/testing';

import { ResourceReadService } from './resource-read.service';

describe('ResourceReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceReadService = TestBed.get(ResourceReadService);
    expect(service).toBeTruthy();
  });
});
