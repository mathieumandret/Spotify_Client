import { TestBed } from '@angular/core/testing';

import { AlbumDetailsService } from './album-details.service';

describe('AlbumDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumDetailsService = TestBed.get(AlbumDetailsService);
    expect(service).toBeTruthy();
  });
});
